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
| Clip planes bound into the material | `panel/material/create.ts:136`, `:195` |
| Wheel / pointer scroll | `scroll.ts:57` (`setupScrollHandlers`), `:243` (`setupScroll`) |
| Scrollbars | `scroll.ts:392` (`setupScrollbars`) |
| Scroll translation matrix | `scroll.ts:32` (`computedGlobalScrollMatrix`) |

**Clipping only applies on the instanced path.** `createPanelMaterial` supplies clipping
attributes when `info.type === 'instanced'` and passes `clippingPlanes: null` otherwise — in
the non-instanced branch `localPosition` stays null and `createPanelSurface` skips the clip
loop (`panel/material/create.ts:130-154`). So a panel that renders through the non-instanced
material will not clip, while the ordinary instanced panel does.

> Several example headers in `src/examples-pages/` still say "per-instance clipping is
> disabled in the TSL port" (dashboard, vanilla, market, lucide). Those comments predate the
> current implementation — `CardExample.tsx:33` describes the same feature as implemented, and
> the code above agrees with it. Verify at runtime if a page depends on it, and treat the
> stale comments as a known inconsistency rather than a spec.

## Why the materials do it this way

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
