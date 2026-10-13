/**
 * TEMPORARY VERIFICATION PROBE — not part of the library.
 *
 * Renders a single hardcoded panel through the TSL panel material to confirm the
 * ported node graph produces a correct rounded rectangle on the WebGPU renderer.
 * Nothing else in the uikit pipeline is exercised. Delete once the panel system
 * is verified end to end.
 */
import { useMemo } from "react";
import {
  DynamicDrawUsage,
  InstancedBufferAttribute,
  Matrix4,
  PlaneGeometry,
} from "three";
import { InstancedMesh, MeshBasicNodeMaterial } from "three/webgpu";
import { createPanelMaterial } from "../uikit-tsl-core/panel/material/create";

/**
 * All four radii at 49% of the panel height — the maximum upstream's base-50
 * packing can express (it clamps to 49). Packing order in `data[8]`, low to
 * high component: bottomLeft, bottomRight, topRight, topLeft.
 */
const PACKED_RADIUS = 49 * (1 + 50 + 2500 + 125000);

function buildPanelMesh() {
  const geometry = new PlaneGeometry(1, 1);

  // The 16-float descriptor, laid out exactly as upstream `materialSetters`.
  const data = new Float32Array(16);
  // [0..3] absolute border sizes (top, right, bottom, left) — no border.
  data.fill(0, 0, 4);
  // [4..7] background rgba — saturated blue, fully opaque.
  data[4] = 0.16;
  data[5] = 0.55;
  data[6] = 1.0;
  data[7] = 1.0;
  // [8] packed corner radii.
  data[8] = PACKED_RADIUS;
  // [9..12] border colour rgba — transparent, so no border may show.
  data.fill(0, 9, 13);
  // [13] border bend.
  data[13] = 0;
  // [14..15] logical width/height, used for aspect ratio + border normalisation.
  data[14] = 100;
  data[15] = 100;

  /*
   * Expose the descriptor as four named itemSize-4 instanced attributes. This
   * layout was verified against the WebGPU renderer: a strided
   * `instancedBufferAttribute(array, 'vec4', 16, offset)` over one 16-float
   * attribute renders nothing, while named itemSize-4 attributes work.
   */
  for (let column = 0; column < 4; column += 1) {
    const target = new Float32Array(4);
    for (let component = 0; component < 4; component += 1) {
      target[component] = data[column * 4 + component]!;
    }
    const attribute = new InstancedBufferAttribute(target, 4, false);
    attribute.setUsage(DynamicDrawUsage);
    geometry.setAttribute(`aData${column}`, attribute);
  }

  // Bound for completeness while the clipping loop is still deferred.
  for (let column = 0; column < 4; column += 1) {
    const attribute = new InstancedBufferAttribute(new Float32Array(4), 4, false);
    attribute.setUsage(DynamicDrawUsage);
    geometry.setAttribute(`aClipping${column}`, attribute);
  }

  const material = createPanelMaterial(MeshBasicNodeMaterial, {
    type: "instanced",
  });

  const mesh = new InstancedMesh(geometry, material, 1);
  // Unit plane scaled to 2x2 world units, centred on the origin.
  mesh.setMatrixAt(0, new Matrix4().makeScale(2, 2, 1));
  mesh.instanceMatrix.needsUpdate = true;
  mesh.frustumCulled = false;
  return mesh;
}

export function PanelProbe() {
  const mesh = useMemo(buildPanelMesh, []);
  return <primitive object={mesh} />;
}
