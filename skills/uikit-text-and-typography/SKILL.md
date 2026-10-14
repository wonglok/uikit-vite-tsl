---
name: uikit-text-and-typography
description: The Text component — fontSize, fontWeight, color, textAlign, letterSpacing, inheritance from the parent container, and the theme's text defaults. Use when adding or styling text in a uikit layout, when text colour or size is not what you set, or when deciding between inline props and a parent-level base style.
---

# `Text`

```tsx
import { Text } from "../uikit-tsl-core/react";

<Text
  fontSize={24}
  fontWeight="semi-bold"
  letterSpacing={-0.4}
  lineHeight="100%"
  color={colors.foreground}
  textAlign="center"
  paddingX={8}
  backgroundColor={colors.background}
>
  Create an account
</Text>
```

Content is children in React, the `text` prop in vanilla:

```tsx
<Text>{user.name}</Text>
<Text>{`${count} unread`}</Text>
```

```ts
new Text({ text: "Operations Console", fontSize: 21, fontWeight: 700, lineHeight: "110%" })
```

## `fontSize` and `fontWeight`

- `fontSize` is a number in px at the panel's `pixelSize`.
- `fontWeight` accepts a number (100–950), a numeric string, or a name. The names and their
  numbers are in `src/uikit-tsl-core/text/font.ts:22-33`:

  `thin` 100 · `extra-light` 200 · `light` 300 · `normal` 400 · `medium` 500 · `semi-bold` 600 ·
  `bold` 700 · `extra-bold` 800 · `black` 900 · `extra-black` 950

  The shadcn-derived pages use the names (`"medium"`, `"semi-bold"`, `"normal"`); the
  performance page uses the number (`700`). Either works.

- The built-in Inter atlas only ships `light`, `medium`, `semi-bold` and `bold`, so other
  weights are accepted but not actually rendered differently — see [[uikit-font-families]].

## `lineHeight`

The one unit trap in the whole system: a bare number is a **multiplier** of `fontSize`, a string
with `px` is absolute. See [[uikit-text-line-height]].

## Colour

`color` follows the theme's `foreground` by default. Use `colors.*` signals rather than literals
so text tracks light/dark and any theme swap:

```tsx
import { colors } from "../uikit-tsl-core/kits/default/react";

<Text color={colors.mutedForeground}>Send notifications to device.</Text>
```

`backgroundColor` works too — that is how the auth page's "OR CONTINUE WITH" divider masks the
line behind it:

```tsx
<Text backgroundColor={colors.background} zIndex={1} paddingX={8} color={colors.mutedForeground}>
  OR CONTINUE WITH
</Text>
```

## Style a subtree once

Text inherits, so a shared rhythm belongs on the parent via the `"*"` selector rather than
repeated on every `Text`:

```tsx
<Container flexDirection="row" alignItems="center" gap={16} {...{ "*": { fontSize: 14, lineHeight: "20px" } }}>
  <Text>Blog</Text>
  <Separator orientation="vertical" />
  <Text>Docs</Text>
</Container>
```

And the kit already supplies sensible defaults — spreading `defaults` gives a container
`lineHeight: "150%"`, the foreground colour and the border colour, so most `Text` needs no
`lineHeight` at all:

```tsx
<Container {...defaults}>…</Container>
```

## Text in other components

- Inside a kit button: `<Button><Text>Save changes</Text></Button>`. Horizon's button wants
  `ButtonLabel` as the wrapper instead — see [[uikit-horizon-panel-material]].
- Static and decorative: pass `pointerEvents="none"` when the text sits inside a card that
  handles hover, so crossing a glyph does not flicker the hover.
- Multi-line strings wrap at the container width; there is no explicit newline control beyond
  `\n` in the string.

See also: [[uikit-text-line-height]], [[uikit-font-families]], [[uikit-responsive-props]].

Source: `AuthExample.tsx:112-147`, `DashboardExample.tsx:229-254`, `DefaultExample.tsx:428-440`.
