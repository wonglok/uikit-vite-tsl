---
name: uikit-root-vs-fullscreen
description: Chooses between Root (a world-space panel with its own pixelSize/sizeX) and Fullscreen (fills the camera frustum). Use when you want UI that floats in 3D space, at a fixed physical size, or when a page needs both a world panel and a screen-space overlay.
---

# `Root` vs `Fullscreen`

| | `Fullscreen` | `Root` |
|---|---|---|
| Parent | the camera | the scene |
| Size | fills the camera frustum | you set `sizeX` / `sizeY` |
| Units | its own `pixelSize` (default suits screen UI) | `pixelSize` prop, e.g. `0.01` |
| Typical use | app chrome, flat UI pages | a physical card / panel in a 3D world |

Both come from `../uikit-tsl-core/react`. `Root` lives in `react/deprecated.tsx` but is the API
the card example uses.

## A world-space card, with a screen-space overlay on top

They compose — this is `CardExample`'s shape:

```tsx
import { Container, Content, Fullscreen, Root, Text } from "../uikit-tsl-core/react";

export function CardPage() {
  return (
    <UikitCanvas camera={{ position: [0, 0, 18], fov: 32.5 }} events={noEvents}>
      <PointerEvents />
      <ambientLight intensity={Math.PI} />

      {/* World space: 4.4 units wide, 0.01 units per CSS pixel. */}
      <Root flexDirection="column" pixelSize={0.01} sizeX={4.4}>
        <Container backgroundColor={0xffffff} dark={{ backgroundColor: 0x0 }} borderRadius={20} flexDirection="column">
          <Text fontWeight="normal" fontSize={24} lineHeight="100%">
            VanArsdel Marketing
          </Text>
        </Container>
      </Root>

      {/* Screen space: pinned to the bottom of the viewport. */}
      <Fullscreen flexDirection="column" justifyContent="flex-end" alignItems="center" paddingBottom={32}>
        <Button>
          <Text>Source Code</Text>
        </Button>
      </Fullscreen>
    </UikitCanvas>
  );
}
```

## Notes

- `pixelSize` is the bridge between the flex layout (px) and world units. On a `Root` at
  `pixelSize={0.01}` a `fontSize={24}` glyph is 0.24 world units tall.
- Mixing them is normal, but their **layout scales differ**, so never let a camera or a nested
  panel cross the boundary expecting one scale. `Content` is where that bites —
  see [[uikit-content-nested-scene]].
- A `Root` needs light to be visible (it is world geometry); a `Fullscreen` page usually
  switches lighting off with `intensity={0}`.

Source: `src/examples-pages/CardExample.tsx:151-232`.
