/**
 * TSL PORT of upstream `panel/material/shader.ts`.
 *
 * Upstream injected GLSL into three's ShaderChunks via `onBeforeCompile`, which
 * only works on the WebGL renderer. This rebuilds the same maths as a Three.js
 * Shading Language node graph, so it runs on WebGPURenderer while still
 * compiling to GLSL for the WebGL2 backend.
 *
 * The per-panel descriptor keeps upstream's 16-float layout verbatim:
 *
 *   data[0] = absolute border sizes (top, right, bottom, left)
 *   data[1] = background colour rgb + background opacity
 *   data[2] = x: 4 border radii packed base-50 | yzw: border colour rgb
 *   data[3] = x: border opacity | y: border bend | zw: width, height
 *
 * Upstream read this as a `mat4` (`data[0]`..`data[3]` being its four columns).
 * TSL has no mat4 column accessor, so the host binds four strided `vec4`
 * attribute nodes at offsets 0/4/8/12 over the same buffer. That reproduces the
 * columns exactly and leaves the buffer layout — and every write path — alone.
 *
 * DIVERGENCES FROM UPSTREAM, both deliberate:
 *
 *  1. The four corner tests are resolved branchlessly, with arithmetic masks.
 *     Upstream used an ordered `if / else if` chain mutating `distance`,
 *     `borderWeight` and `insideBorder`; here each corner gets a 0/1 weight that
 *     is 1 only if it matched and no earlier corner did, and the results are
 *     combined with multiply/add. Same semantics, no mutable state. Cost: four
 *     corner distances evaluated rather than one — revisit if profiling says so.
 *
 *     The masks are deliberate, not stylistic. `select()` is NOT the shortcut it
 *     looks like: it compiles both sides, and because the graph is evaluated
 *     unconditionally a NaN in the branch that was not chosen still wins
 *     (`NaN * 0 === NaN`). Upstream had no such hazard because real branches do
 *     not evaluate the other side. Every division that upstream guarded with a
 *     ternary is therefore written here as a floored divisor plus a `mix`, which
 *     reproduces upstream's result without ever producing NaN or infinity. This
 *     was not theoretical: `0/0` inside `radiusDistance` used to blank out the
 *     border on every panel.
 *
 *  2. `(borderWeight * transpose(directions)).xyz` is expanded into three dot
 *     products. See `createPanelSurface` for the derivation.
 *
 * Only TSL APIs verified present in three 0.186 are used (notably: `widen` and
 * a `.swizzle()` method do NOT exist and must not be reintroduced).
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Fn,
  abs,
  dot,
  float,
  fwidth,
  max,
  min,
  mix,
  select,
  smoothstep,
  step,
  vec2,
  vec3,
  vec4,
} from 'three/tsl'

type AnyNode = any

/**
 * TSL's constructor overload sets mis-resolve when every argument is
 * dynamically typed — `vec4(a, b, c, d)` with `any` arguments picks a
 * vec3-returning candidate and fails to typecheck, even though it is correct at
 * runtime. These aliases take the argument list as written and hand back an
 * untyped node.
 */
const nodeVec3 = vec3 as unknown as (...args: Array<AnyNode>) => AnyNode
const nodeVec4 = vec4 as unknown as (...args: Array<AnyNode>) => AnyNode

/** Component-wise minimum across all four lanes: `min(min(x,y), min(z,w))`. */
const min4 = /* @__PURE__ */ Fn(([v]: [AnyNode]) => {
  const tmp: AnyNode = min(v.xy, v.zw)
  return min(tmp.x, tmp.y)
})

/** Component-wise maximum across all four lanes. */
const max4 = /* @__PURE__ */ Fn(([v]: [AnyNode]) => {
  const tmp: AnyNode = max(v.xy, v.zw)
  return max(tmp.x, tmp.y)
})

/**
 * Signed distance to the outer rounded corner and to the inner border edge,
 * weighting each axis by how much it contributes to the corner radius.
 *
 * DIVERGENCE: upstream wrote `sum > 0 ? unnorm / sum : vec2(0.5)`. That `0/0`
 * is NaN, and a NaN here is fatal in a TSL node graph — `select()`/`mix()`
 * evaluate BOTH branches, and `NaN * 0` is still NaN, so an unselected corner
 * could poison `distance` for the whole panel. The divisor is therefore floored
 * and the fallback applied with `mix`, which reproduces upstream's result with
 * no division by zero.
 */
const radiusDistance = /* @__PURE__ */ Fn(
  ([radius, outside, border, borderSize]: [AnyNode, AnyNode, AnyNode, AnyNode]) => {
    const outerRadius = vec2(radius, radius)
    const innerRadius = outerRadius.sub(borderSize)

    const radiusWeightUnnorm = abs(innerRadius.sub(border))
    const sum = radiusWeightUnnorm.x.add(radiusWeightUnnorm.y)
    const radiusWeight = mix(
      radiusWeightUnnorm.div(max(sum, float(1e-6))),
      vec2(0.5, 0.5),
      // 1 when the sum is (near) zero, i.e. upstream's `else` branch.
      float(1).sub(step(float(1e-6), sum)),
    )

    return vec2(
      radius.sub(outside.distance(outerRadius)),
      dot(radiusWeight, innerRadius).sub(border.distance(innerRadius)),
    )
  },
)

/**
 * Point where the border edge meets the corner arc — weights which corner owns
 * a fragment once a radius has eaten the entire border width.
 *
 * `aspectRatio` is floored for the same reason as `sum` above: a zero here
 * would divide to infinity and poison the corner distance.
 */
const calculateCornerIntersection = /* @__PURE__ */ Fn(
  ([cornerRadius, borderSizes, aspectRatio]: [AnyNode, AnyNode, AnyNode]) => {
    const safeAspect = max(aspectRatio, float(1e-6))
    const tmp1 = cornerRadius.sub(borderSizes.y)
    const xIntersection = vec2(tmp1, tmp1.div(safeAspect))

    const tmp2 = cornerRadius.sub(borderSizes.x)
    const yIntersection = vec2(tmp2.mul(safeAspect), tmp2)

    return min(xIntersection, yIntersection)
  },
)

/**
 * Unpacks the four radii upstream bit-packs into `data[2].x`, base 50. Upstream
 * did this in the vertex shader and passed a varying; we do it per-fragment,
 * which is behaviourally identical (the value is constant across a panel) and
 * avoids varying plumbing.
 */
export function unpackBorderRadius(packed: AnyNode) {
  const asInt = packed.toInt()
  return vec4(
    asInt.div(125000).mod(50).toFloat(),
    asInt.div(2500).mod(50).toFloat(),
    asInt.div(50).mod(50).toFloat(),
    asInt.mod(50).toFloat(),
  ).mul(0.01)
}

/**
 * The four corner tests. `laneIndices` is the swizzle upstream wrote, e.g. `.wx`
 * inspects lanes 3 and 0, and assigns back into those same lanes.
 */
const CORNERS = [
  { laneIndices: [3, 0], radiusIndex: 0 }, // .wx
  { laneIndices: [1, 0], radiusIndex: 1 }, // .yx
  { laneIndices: [1, 2], radiusIndex: 2 }, // .yz
  { laneIndices: [2, 3], radiusIndex: 3 }, // .zw
] as const

/**
 * A vec4 with 1 in the two given lanes and 0 elsewhere. Multiplying a
 * `vec2.xyxy` by this scatters the pair back into its own two lanes, which is
 * upstream's `insideBorder.<lanes> = ...` assignment without mutation.
 */
function laneMasks(laneA: number, laneB: number): AnyNode {
  return vec4(
    laneA === 0 || laneB === 0 ? 1 : 0,
    laneA === 1 || laneB === 1 ? 1 : 0,
    laneA === 2 || laneB === 2 ? 1 : 0,
    laneA === 3 || laneB === 3 ? 1 : 0,
  )
}

export interface PanelSurfaceInput {
  /** Panel uv, in `0..1`. */
  uv: AnyNode
  /** Base material colour — upstream's `diffuseColor.rgb`. */
  materialColor: AnyNode
  /** Base material alpha — upstream's `diffuseColor.a`. */
  materialOpacity: AnyNode
  /** `data[0]` — absolute border sizes. */
  borderSize: AnyNode
  /** `data[1]` — background rgba. */
  background: AnyNode
  /** `data[2]` — packed radius + border rgb. */
  borderAndRadius: AnyNode
  /** `data[3]` — border opacity, bend, width/height. */
  dimensions: AnyNode
  /** Four clipping planes, or null when unclipped. */
  clippingPlanes: [AnyNode, AnyNode, AnyNode, AnyNode] | null
  /**
   * Fragment position **in the space `clippingPlanes` are expressed in** — required
   * only when `clippingPlanes` is set. The instanced panel passes `positionLocal`
   * (`instanceMatrix * position`, matching its per-instance attributes); everything
   * that clips through world space plane uniforms (`./clip`) passes `positionWorld`.
   */
  localPosition: AnyNode | null
  /** Current normal, when the material supports border bend; else null. */
  normal: AnyNode | null
  /** Object-space tangent/bitangent, used only for border bend. */
  tangent: AnyNode | null
  bitangent: AnyNode | null
}

export interface PanelSurfaceOutput {
  colorNode: AnyNode
  opacityNode: AnyNode
  normalNode: AnyNode | null
}

/**
 * Builds the shared per-fragment panel maths: rounded-corner coverage, border
 * blending, per-instance clipping and opacity. Mirrors `compilePanelMaterial`.
 */
export function createPanelSurface(input: PanelSurfaceInput): PanelSurfaceOutput {
  const { uv, borderSize, background, borderAndRadius, dimensions } = input

  const borderRadius = unpackBorderRadius(borderAndRadius.x)

  const backgroundColor = background.xyz
  const backgroundOpacity = background.w
  const borderColor = borderAndRadius.yzw
  const borderOpacity = dimensions.x
  const borderBend = dimensions.y
  const panelDimensions = dimensions.zw

  const aspectRatio = panelDimensions.x.div(panelDimensions.y)
  // vec4 / float broadcasts; upstream wrote dimensions.yyyy.
  const relativeBorderSize = borderSize.div(panelDimensions.y)

  // Upstream flips v so uv.y grows downward across the panel.
  const uvFlipped: AnyNode = vec2(uv.x, float(1).sub(uv.y))

  const one = vec4(1, 1, 1, 1)

  const outsideDistance: AnyNode = nodeVec4(
    uvFlipped.y,
    float(1).sub(uvFlipped.x).mul(aspectRatio),
    float(1).sub(uvFlipped.y),
    uvFlipped.x.mul(aspectRatio),
  )

  const borderDistance: AnyNode = outsideDistance.sub(relativeBorderSize)

  // Base (un-rounded) distances: nearest edge of the quad, then of the border.
  const baseDistance: AnyNode = vec2(min4(outsideDistance), min4(borderDistance))

  // Border ownership: which edge's border is closest, normalised.
  const negateBorderDistance: AnyNode = one.sub(borderDistance)
  const borderWeightBase: AnyNode = step(max4(negateBorderDistance), negateBorderDistance)

  const radii = [borderRadius.x, borderRadius.y, borderRadius.z, borderRadius.w]

  /*
   * The corner chain, resolved with arithmetic masks rather than `select()`.
   *
   * Upstream used an ordered `if / else if` chain mutating `distance`. The
   * branchless equivalent here gives each corner a weight that is 1 only if it
   * matched AND no earlier corner did (`remaining`), so the earliest match wins
   * exactly as it does upstream — but using only add/sub/mul, which evaluate
   * unconditionally and cannot smuggle a value out of an unselected branch the
   * way `select()`/`mix()` can.
   */
  let claimed: AnyNode = float(0)
  let remaining: AnyNode = float(1)
  let insideBorder: AnyNode = vec4(0, 0, 0, 0)

  for (let index = 0; index < CORNERS.length; index += 1) {
    const corner = CORNERS[index]!
    const laneA = corner.laneIndices[0]
    const laneB = corner.laneIndices[1]

    const outside = vec2(
      outsideDistance.element(laneA),
      outsideDistance.element(laneB),
    )
    const border = vec2(
      borderDistance.element(laneA),
      borderDistance.element(laneB),
    )
    const cornerBorderSize = vec2(
      relativeBorderSize.element(laneA),
      relativeBorderSize.element(laneB),
    )

    const radius = radii[corner.radiusIndex]!

    // `all(lessThan(outside, vec2(radius)))` as a 0/1 weight.
    // `step(edge, x)` is x >= edge, so this is 1 exactly when the lane is below
    // the radius.
    const matches = float(1)
      .sub(step(radius, outside.x))
      .mul(float(1).sub(step(radius, outside.y)))

    const weight = matches.mul(remaining)
    remaining = remaining.mul(float(1).sub(matches))

    const cornerDistance = radiusDistance(radius, outside, border, cornerBorderSize)

    const lineIntersection = calculateCornerIntersection(
      radius,
      cornerBorderSize,
      aspectRatio,
    )
    const intersectionDelta = max(vec2(0, 0), lineIntersection.sub(border))

    // Upstream assigned the pair into `insideBorder.<lanes>`: laneA takes the
    // first component, laneB the second. Untouched lanes stay zero.
    const cornerInside = laneMasks(laneA, laneB).mul(intersectionDelta.xyxy)

    claimed = claimed.add(cornerDistance.mul(weight))
    insideBorder = insideBorder.add(cornerInside.mul(weight))
  }

  // Corners never tile the panel, so whatever they did not claim falls back to
  // the straight-edge distances.
  const distance: AnyNode = claimed.add(baseDistance.mul(remaining))

  // If a corner claimed the fragment, renormalise the border weights so they sum
  // to 1 across that corner's two axes. Upstream only overwrote borderWeight
  // here — it never zeroed it per-branch.
  const insideBorderSum = dot(insideBorder, one)
  const borderWeight: AnyNode = mix(
    insideBorder.div(max(insideBorderSum, float(1e-6))),
    borderWeightBase,
    // 1 when no corner claimed the fragment (upstream's `sum > 0` guard).
    float(1).sub(step(float(1e-6), insideBorderSum)),
  )

  /* ---------------------------------------------------------------- opacity */

  const distanceGradient: AnyNode = fwidth(distance)
  const outer = smoothstep(distanceGradient.x.negate(), distanceGradient.x, distance.x)
  const inner = smoothstep(distanceGradient.y.negate(), distanceGradient.y, distance.y)

  // 1.0 - step(0.1, outer - inner) * (1.0 - inner)
  const transition = float(1).sub(step(0.1, outer.sub(inner)).mul(float(1).sub(inner)))

  const fullBackgroundOpacity = input.materialOpacity.mul(backgroundOpacity)
  const fullBorderOpacity = min(float(1), borderOpacity.add(fullBackgroundOpacity))

  const clipOpacity = input.clippingPlanes
    ? (clipOpacityFor(input.clippingPlanes, input.localPosition) ?? float(1))
    : float(1)

  const outOpacity = clipOpacity
    .mul(outer)
    .mul(mix(fullBorderOpacity, fullBackgroundOpacity, transition))

  /* ------------------------------------------------------------------ colour */

  const mainColor = input.materialColor.mul(backgroundColor)
  const borderMix = borderOpacity.div(max(fullBorderOpacity, float(0.001)))
  const outColor = mix(mix(mainColor, borderColor, borderMix), mainColor, transition)

  /* ------------------------------------------------------------------ normal */

  let normalNode: AnyNode | null = null
  if (input.normal && input.tangent && input.bitangent) {
    const tangent = input.tangent.xyz.normalize()
    const bitangent = input.bitangent.normalize()

    /*
     * Upstream:
     *   mat4 directions = mat4(bitangent, tangent, -bitangent, -tangent)  // columns
     *   vec3 outsideNormal = (borderWeight * transpose(directions)).xyz
     *
     * `transpose(directions)[i][j] === directions[j][i]`, and each column j of
     * `directions` is `(d_j, 1)` with d_j cycling bitangent / tangent /
     * -bitangent / -tangent. So for component j:
     *
     *   result[j] = dot(borderWeight.xyz, d_j) + borderWeight.w * 1
     */
    const borderWeightXyz: AnyNode = borderWeight.xyz
    const borderWeightW: AnyNode = borderWeight.w

    const outsideNormal: AnyNode = nodeVec3(
      dot(borderWeightXyz, bitangent).add(borderWeightW),
      dot(borderWeightXyz, tangent).add(borderWeightW),
      dot(borderWeightXyz, bitangent.negate()).add(borderWeightW),
    ).normalize()

    const currentBorderSize: AnyNode = distance.x.sub(distance.y)
    // Same guarded-divisor treatment as above: `select()` would still evaluate
    // the 0-division branch, and an infinity there poisons the normal.
    const outsideNormalWeight: AnyNode = mix(
      max(float(0), distance.y.negate().div(max(currentBorderSize, float(1e-5)))).mul(borderBend.negate()),
      float(0),
      // 1 when the border has no width here (upstream's `currentBorderSize < 1e-5`).
      float(1).sub(step(float(1e-5), currentBorderSize)),
    )

    normalNode = (mix(input.normal, outsideNormal, outsideNormalWeight) as AnyNode).normalize()
  }

  return { colorNode: outColor, opacityNode: outOpacity, normalNode }
}

/**
 * Clipping. Upstream discarded as soon as the accumulated opacity fell below
 * 0.01; we accumulate the product and let the caller discard once, which is
 * equivalent and avoids mid-expression control flow.
 *
 * Shared with `./clip` — the instanced panel path passes `positionLocal` and its
 * per-instance attributes; the non-instanced one passes `positionWorld` and world
 * space plane uniforms. `position` must be in the same space as `planes`.
 */
export function clipOpacityFor(
  planes: [AnyNode, AnyNode, AnyNode, AnyNode],
  localPosition: AnyNode | null,
): AnyNode | null {
  if (!localPosition) return null

  let clip: AnyNode = float(1)
  for (const plane of planes) {
    const distanceToPlane = dot(localPosition, plane.xyz).add(plane.w)
    // fwidth( d ) / 2, floored so the smoothstep never collapses to zero width.
    const gradient = max(fwidth(distanceToPlane).mul(0.5), float(0.00001))
    clip = clip.mul(smoothstep(gradient.negate(), gradient, distanceToPlane))
  }
  return clip
}

/* eslint-enable @typescript-eslint/no-explicit-any */

export { min4, max4, radiusDistance, calculateCornerIntersection }
