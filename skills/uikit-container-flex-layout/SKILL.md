---
name: uikit-container-flex-layout
description: Lays out uikit UI with Container and Yoga flexbox properties — direction, gap, padding, alignment, grow/shrink, borders, radius and background. Use when building any uikit layout, when a row or column does not size or align as expected, or when choosing between padding, paddingX and paddingY.
---

# Container = a Yoga flexbox node

`Container` is a flexbox box laid out by Yoga, with CSS-like spellings. There is no `<div>`, no
margin collapsing, and no intrinsic content sizing beyond text.

```tsx
import { Container, Text } from "../uikit-tsl-core/react";

<Container
  flexDirection="row"          // row | column  (default: column)
  alignItems="center"          // flex-start | center | flex-end | stretch
  justifyContent="space-between"
  gap={12}
  padding={14}
  paddingX={12}                // overrides the X axis of `padding`
  width={236}                  // number = px at the panel's pixelSize
  height="100%"                // "100%" | "auto" | number | "50px"
  flexGrow={1}                 // grow to fill the main axis
  flexShrink={0}               // never shrink (headers, fixed rails)
  flexBasis={0}
  minWidth={0}                 // allow shrinking below content size
  borderRadius={8}
  borderWidth={1}
  borderColor={0xd8dee8}
  backgroundColor={0xffffff}
>
  <Text>Sizes in px, not world units.</Text>
</Container>
```

## Layout recipes taken from the examples

**Fixed rail + flexible body** — the `vanilla` / `market` shell:

```tsx
<Container flexDirection="row" height="100%" padding={14} gap={14}>
  <Container width={236} height="100%" flexShrink={0} flexDirection="column" gap={16} />
  <Container height="100%" flexGrow={1} flexShrink={1} minHeight={0} flexDirection="column" gap={12} />
</Container>
```

`minHeight={0}` on the body is what lets it shrink instead of overflowing its parent.

**Equal columns** — `flexBasis={0}` + `flexGrow={1}` on every sibling:

```tsx
<Container flexDirection="row" gap={16}>
  <Card flexDirection="column" flexBasis={0} flexGrow={1} />
  <Card flexDirection="column" flexBasis={0} flexGrow={1} />
</Container>
```

**Push to the far edge** — `marginLeft="auto"`, or an empty spacer:

```tsx
<Container marginLeft="auto" flexDirection="row" alignItems="center" gap={16} />
<Container flexGrow={1} />   {/* equivalent spacer */}
```

**A dot** — a Container with no children, rounded past half its size:

```tsx
<Container height={8} width={8} borderRadius={1000} backgroundColor={colors.primary} />
```

## Units and spacing gotchas

- Bare numbers are px at the panel's own `pixelSize`; quoted strings may carry units
  (`"100%"`, `"20px"`, `"auto"`).
- `padding` / `margin` have per-axis and per-edge spellings: `paddingX`, `paddingY`,
  `paddingTop`, `marginX`, `marginTop`, …
- `transformTranslateX/Y/Z` moves a box without affecting layout — that is how the card
  slide-up animation works, and how chart bars are offset.

See also: [[uikit-text-line-height]], [[uikit-responsive-props]], [[uikit-overflow-scroll-clipping]].

Source: `VanillaExample.tsx:289-451`, `DashboardExample.tsx:262-262`, `CardExample.tsx:288-294`.
