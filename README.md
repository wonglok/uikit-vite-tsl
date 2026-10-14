# uikit-vite-tsl

A **WebGPU port of [pmndrs/uikit](https://github.com/pmndrs/uikit)** — the React Three
Fiber UI kit whose panels, borders and MSDF text were written as raw GLSL injected into
three's `ShaderChunk`s — rebuilt on [Three.js Shading Language
(TSL)](https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language) node materials so
it runs on `WebGPURenderer` (and still compiles down to GLSL for the WebGL2 backend).

Upstream's shaders only ran on the WebGL renderer because they were patched in via
`material.onBeforeCompile`. This project replaces those patches with TSL node graphs and
removes the WebGL-only assumptions that stood in the way.

---

## Credit

This is a **derivative work**. Everything the UI kit *is* — the layout engine, the component
API, the theme trees, the `default` / `horizon` / `lucide` kits, the examples — comes from
upstream and belongs to its authors:

> **[pmndrs/uikit](https://github.com/pmndrs/uikit)** — Copyright 2024 Bela Bohlender and the
> Poimandres (`pmndrs`) contributors. MIT licensed.

Vendored files under `src/uikit-tsl-core/` keep their upstream MIT headers; see
`src/uikit-tsl-core/LICENSE`, `src/uikit-tsl-core/uikit/THIRD_PARTY_LICENSES`, and the
per-directory `LICENSE` files (e.g. `src/uikit-tsl-core/text/LICENSE`). Third-party licenses
for the bundled fonts and the Lucide icon set are included alongside the code they cover.

**If you want the supported, non-port version, use upstream.** This repository exists only to
explore what the kit looks like on the TSL/WebGPU path.

### What this port changed

| Upstream (GLSL) | This repo (TSL) |
| --- | --- |
| `onBeforeCompile` string-patching of `MeshBasicMaterial` / `MeshPhongMaterial` | `MeshBasicNodeMaterial` / `MeshPhongNodeMaterial` with `colorNode` / `opacityNode` / `normalNode` graphs |
| `attribute mat4 aData` read as four columns | Four named `itemSize: 4` instanced attributes (`create.ts`) |
| Ordered `if / else if` corner chain mutating `distance` | Branchless arithmetic masks (`shader.ts`) |
| Ternary-guarded divisions | Floored divisors + `mix` |
| `(borderWeight * transpose(directions)).xyz` | Three expanded `dot` products |
| `WebGLRenderer` (R3F default) | `WebGPURenderer`, WebGL2 fallback |

---

## Shading language port

The three hot paths that were GLSL are now TSL, each documented at length in its own
file header:

- **`src/uikit-tsl-core/panel/material/shader.ts`** — the panel surface maths: rounded-corner
  SDF coverage, border blending, per-instance clipping and opacity. Upstream's 16-float
  descriptor layout is preserved verbatim.
- **`src/uikit-tsl-core/panel/material/create.ts`** — material construction and the
  instanced-attribute binding that TSL actually accepts.
- **`src/uikit-tsl-core/text/render/instanced-glyph-material.ts`** — MSDF glyph
  reconstruction (`median(r,g,b)` → distance → `smoothstep` coverage) as a node graph on
  `MeshBasicNodeMaterial`.

### Two divergences worth knowing

These are not style choices; both were forced by how TSL evaluates:

1. **No real branches.** `select()` and `mix()` compile *and evaluate* both sides, so a NaN
   or infinity in the branch that "wasn't taken" still wins (`NaN * 0 === NaN`). Upstream had
   no such hazard because its `if/else` genuinely branched. Every division upstream guarded
   with a ternary is therefore rewritten here as a floored divisor plus a `mix`. This was a
   live bug, not a precaution: a `0/0` inside `radiusDistance` used to blank the border on
   every panel.
2. **The corner chain is arithmetic.** Upstream's ordered `if / else if` became per-corner
   0/1 weights multiplied into the result, which reproduces "earliest match wins" using only
   add/sub/mul. Cost: four corner distances are evaluated rather than one.

Known-good API surface: only TSL exports verified present in `three@0.186` are used.
`widen` and a `.swizzle()` method do **not** exist here and must not be reintroduced.

---

## Known limitations

- **The `horizon` kit's `Panel` is still GLSL.** It overrides
  `onBeforeCompile` in `kits/horizon/core/background-material.ts`, which never runs on the
  WebGPU renderer — those panels fall back to a flat fill and draw no border. The
  `horizon` example works around this with bordered `Container`s and has a comment saying so.
- **TSL node materials have no GLSL fallback.** A plain R3F `<Canvas>` defaults to
  `WebGLRenderer` and will render blank. Every page must go through the `UikitCanvas`
  wrapper (see below).
- **Examples are ports, not copies.** A few upstream demos are omitted where a local asset
  was not vendored (the `default` kit's `video` demo, for instance).

---

## Running it

```bash
npm install
npm run dev      # vite dev server
npm run build    # tsc -b && vite build
npm run preview  # serve the production build
npm run lint     # oxlint
```

A WebGPU-capable browser is needed for the primary path; elsewhere `WebGPURenderer` falls
back to WebGL2 automatically, and `Experience.tsx` records which backend came up.

### `UikitCanvas`

The one non-negotiable wrapper — `src/examples-pages/UikitCanvas.tsx`. It supplies the
`WebGPURenderer` and pins two renderer defaults whose upstream equivalents are inert or warn
on WebGPU:

- `shadows={{ type: PCFShadowMap }}` — three removed `PCFSoftShadowMap` on the WebGPU backend
  and silently downgrades it with a console warning; R3F's default still selects the removed
  value.
- `flat` — panels opt out of tone mapping via `material.toneMapped = false`, which is inert
  on WebGPU. R3F's default ACES filmic tone mapping was crushing the theme's pure white
  (`#ffffff`) to `#e3e3e3`.

```tsx
import { WebGPURenderer, PCFShadowMap } from "three/webgpu";

export function UikitCanvas({ gl: _ignored, ...props }: CanvasProps) {
  const gl = useCallback(async (bootstrapProps: unknown) => {
    const { canvas } = bootstrapProps as { canvas: HTMLCanvasElement };
    const renderer = new WebGPURenderer({ canvas, antialias: true });
    await renderer.init();
    return renderer;
  }, []);

  return (
    <Canvas gl={gl} shadows={{ type: PCFShadowMap }} style={{ height: "100%" }} {...props} flat />
  );
}
```

---

## Layout

```
src/
  uikit-tsl-core/       vendored @pmndrs/uikit, ported to TSL
    panel/material/     the panel shader: shader.ts, create.ts, presets.ts, depth.ts
    text/render/        MSDF glyph + text instancing node materials
    kits/               default / horizon / lucide component kits
    components/         Container, Text, Image, Video, Input, Svg, …
    flex/ properties/   yoga-layout bridge, property resolution
    react/              R3F reconciler, hooks, portal
  examples-pages/       one page per upstream example + registry.ts
  components/           UikitCanvas, Experience, and the TSL probe scenes
  store/                zustand stores
skills/                 agent-facing notes on the port's sharp edges
```

### Examples

`src/examples-pages/registry.ts` is the single source of truth: the home page lists what it
contains and the router derives its routes from it. Adding an example means adding one entry
plus a matching `*Example.tsx`. Pages are glob-imported and lazily loaded, so a missing file
is a runtime 404 rather than a build failure.

`zustand` holds the state that upstream examples kept in `useState` — a project convention,
not a technical requirement.

### `skills/`

22 short notes capturing the non-obvious parts of working in this port (canvas setup,
per-instance clipping, the horizon panel caveat, runtime TTF atlases, signals vs. state, and
so on). They are written for agents and humans alike; start there before debugging a blank
panel.

---

## Toolchain

React 19 · Vite 8 · TypeScript 6 · `three@0.186` · `@react-three/fiber@9` ·
`@react-three/xr` · `zustand` · `yoga-layout` · `@preact/signals-core` ·
`@pmndrs/msdfonts` · oxlint · Tailwind 4.

`tsconfig.app.json` deliberately disables `verbatimModuleSyntax`, `erasableSyntaxOnly`,
`noUnusedLocals` and `noUnusedParameters` — only because `src/uikit-tsl-core` is vendored
upstream code that would otherwise report ~300 errors with no real defect behind them. New
code outside that directory should still use explicit `import type`.

---

## License

MIT, inherited from upstream. The port's own changes are offered under the same terms; the
vendored code remains the copyright of its original authors (see **Credit** above and the
`LICENSE` files throughout `src/uikit-tsl-core/`).
