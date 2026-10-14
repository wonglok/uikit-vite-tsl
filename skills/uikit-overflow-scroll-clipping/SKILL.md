---
name: uikit-overflow-scroll-clipping
description: Clipping and scrolling panels — overflow="hidden"|"scroll", scrollbar styling, and what actually clips in this TSL port. Use when content must be cut off at a panel edge, when building a scroll area, when a slide-up panel shows a sliver it should hide, or when a header comment claims clipping is disabled.
---

# Overflow, clipping and scrolling

## The props

```tsx
<Container
  overflow="scroll"              // "visible" (default) | "hidden" | "scroll"
  scrollbarWidth={8}
  scrollbarColor={0x98a2b3}
  scrollbarBorderRadius={8}
  scrollbarColor="rgba(0, 0, 0, 0.35)"
  flexDirection="column"
  minHeight={0}                  // let it shrink so it can scroll instead of overflowing
/>
```

`overflow="hidden"` cuts content at the box — that is how the card's slide-up panel hides behind
the card when closed. `overflow="scroll"` adds wheel/pointer scroll handling and scrollbars.

## What the code actually implements

Both are present in this port:

| Piece | Where |
|---|---|
| Clip rectangle maths | `src/uikit-tsl-core/clipping.ts` (`ClippingRect`) |
| 16 clip floats per panel instance | `panel/instance/group.ts:29-33`, `:336-341` |
| Clip planes bound into the instanced material | `panel/material/create.ts:136`, `:195` |
| Clip planes for everything else (`Image`, `Video`, `Svg`, node-material `Custom`, nested meshes) | `panel/material/clip.ts` (`createClipPlaneUniforms`, `applyClippingToNodeMaterial`) |
| Wheel / pointer scroll | `scroll.ts:57` (`setupScrollHandlers`), `:243` (`setupScroll`) |
| Scrollbars | `scroll.ts:392` (`setupScrollbars`) |
| Scroll translation matrix | `scroll.ts:32` (`computedGlobalScrollMatrix`) |

**Two paths clip, both in the material's node graph.**

1. **Instanced panels** (a `Container`/`Content`/`Text` background) carry the planes as
   per-instance attributes: `aClipping0..3` (`panel/instance/group.ts:29-33`, `:336-341`),
   consumed with `positionLocal`.
2. **Everything else** goes through `panel/material/clip.ts`: four `vec4` uniforms holding the
   planes in **world** space, resolved live once per rendered frame, multiplied into opacity by
   the same `clipOpacityFor`. That covers `Image`/`Video` (the non-instanced panel material),
   `Svg` shape meshes, `Custom` and any `Mesh` nested in a `Content` — provided the material is
   a **node material**; `applyClippingToNodeMaterial` returns false for classic WebGL materials
   (`new MeshStandardMaterial()`), which cannot be clipped under WebGPU at all.

**Why the second path exists:** upstream handed the planes to `material.clippingPlanes` (+
`renderer.localClippingEnabled`). **`WebGPURenderer` never reads `material.clippingPlanes`** —
in three 0.186 the only reader is `ClippingContext` for `ClippingGroup` scene nodes
(`renderers/common/Renderer.js` `_projectObject` → `getGroupContext`). Every such assignment in
this port is dead on WebGPU, which is why images and SVGs used to spill out of their scroll
containers while panels clipped correctly.

Known gaps, unchanged: `overflow` on a `Content` is a no-op (only `Container` computes a
`clippingRect`, and a `Content` clips to its **parent's** rect); a classic-material `Custom` or
nested mesh still does not clip.

## Why the instanced materials do it this way

Clip planes are expressed in the panel mesh's **local** space — exactly the space
`instanceMatrix * position` lives in. TSL exposes no `instanceMatrix` accessor, but it does not
need to: `positionLocal` is "the transformed vertex position in local space", where
*transformed* covers instancing, so for this instanced mesh it is literally
`instanceMatrix * positionGeometry` — upstream's `localPosition` verbatim. That keeps the four
clip attributes (`aClipping0..3`) exactly as the CPU scatter writes them: no CPU baking of
planes, no extra per-instance bandwidth.

## Recipes

```tsx
// Full-height scroll column, with the parent allowed to shrink.
<Container flexDirection="column" flexGrow={1} minHeight={0} overflow="scroll" gap={6} padding={8}
           backgroundColor={0xeef2f6} borderRadius={8} scrollbarWidth={8} scrollbarColor={0x98a2b3}>
  {rows.map((row) => <Row key={row.id} {...row} />)}
</Container>

// Wrap-around icon grid.
<Fullscreen flexDirection="row" flexWrap="wrap" overflow="scroll" gap={10} padding={10}>
  {icons.map((Icon, i) => <Icon key={i} />)}
</Fullscreen>

// Slide-up reveal: outer hides, inner is translated.
<Container flexDirection="column" transformTranslateY={-40} overflow="hidden">
  <Container paddingTop={40} transformTranslateY={translateY} backgroundColor={colors.secondary} />
</Container>
```

See also: [[uikit-container-flex-layout]], [[uikit-canvas-webgpu]].

Source: `VanillaExample.tsx:413-430`, `LucideExample.tsx:24-32`, `CardExample.tsx:233-244`.
