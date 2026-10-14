---
name: uikit-font-families
description: Loads MSDF fonts and selects them on Text — the fontFamilies prop, fontFamily, the built-in Inter default, available weights, and FontFamilyProvider. Use when text must use a non-default typeface, when fontWeight is ignored, or when choosing which @pmndrs/msdfonts family to import.
---

# Fonts

Text is rendered from pre-baked MSDF atlases. A `fontFamilies` value is a **map of family name →
weight → loader**; `fontFamily` then picks one by name.

## The default

With no props, text uses `inter`, declared in `src/uikit-tsl-core/text/font.ts:127` and lazily
imported from `@pmndrs/msdfonts/inter`:

```ts
const defaultFontFamiles: FontFamilies = {
  inter: {
    light:    () => import('@pmndrs/msdfonts/inter').then(({ inter }) => inter.light),
    medium:   () => import('@pmndrs/msdfonts/inter').then(({ inter }) => inter.medium),
    'semi-bold': () => import('@pmndrs/msdfonts/inter').then(({ inter }) => inter['semi-bold']),
    bold:     () => import('@pmndrs/msdfonts/inter').then(({ inter }) => inter.bold),
  },
}
```

**Only four weights exist in the built-in set** — `light`, `medium`, `semi-bold`, `bold`.
`fontWeight="normal"`, `"thin"`, `"black"` and numeric weights are all *valid* (see
`fontWeightNames`: thin 100 … black 900 … extra-black 950) but the default family has no atlas
for them, so the weight is silently not what you asked for. Supply your own `fontFamilies`
entry for anything outside the four.

## Adding a family

```tsx
import { Text } from "../uikit-tsl-core/react";
import { firaCode } from "@pmndrs/msdfonts/fira-code";

<Text
  backgroundColor="black"
  color="white"
  padding={8}
  fontFamilies={{ firaCode }}   // registers the family under its own name
  fontFamily="firaCode"          // …then selects it
>
  npm install @react-three/uikit
</Text>
```

Available subpaths of `@pmndrs/msdfonts`: `inter`, `roboto`, `openSans` (`open-sans`), `lato`,
`poppins`, `montserrat`, `nunito`, `raleway`, `workSans`, `playfairDisplay`, `merriweather`,
`libreBaskerville`, `crimsonText`, `firaCode`, `sourceCodePro`, `inconsolata`, `spaceMono`.
Each is a lazy chunk — importing the barrel pulls all of them.

## Setting it once for a subtree

```tsx
import { FontFamilyProvider } from "../uikit-tsl-core/react";
import { spaceMono } from "@pmndrs/msdfonts/space-mono";

<FontFamilyProvider fontFamilies={{ spaceMono }}>
  <Fullscreen>…every Text below inherits spaceMono…</Fullscreen>
</FontFamilyProvider>
```

`fontFamilies` is inherited down the tree, so the nearest ancestor wins. A runtime-generated
atlas (an uploaded TTF) participates the same way — see [[uikit-runtime-ttf-atlas]].

See also: [[uikit-text-line-height]], [[uikit-runtime-ttf-atlas]].

Source: `src/uikit-tsl-core/text/font.ts:22-133`, `HorizonExample.tsx:347-357`.
