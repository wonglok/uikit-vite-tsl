---
name: uikit-runtime-ttf-atlas
description: Generates an MSDF font atlas at runtime from a .ttf/.otf file or URL, via useTTF (React) or TTFLoader (vanilla). Use when the UI must use a font that has no pre-baked MSDF atlas, when loading a user-uploaded font, or when wiring @zappar/msdf-generator into a uikit page.
---

# Runtime TTF → MSDF atlas

Pre-baked fonts ([[uikit-font-families]]) are the cheap path. When the font is only known at
runtime — an upload, or a licensed face you cannot ship as an atlas — generate one in the
browser with `@zappar/msdf-generator`.

## React: `useTTF`

`useTTF` suspends, so it must be under a `<Suspense>` boundary. That is the whole reason the
upstream example had a `Loading` fallback.

```tsx
import { Suspense } from "react";
import { Container, Fullscreen, Text, useTTF } from "../uikit-tsl-core/react";

function CustomFontText({ url }: { url: string }) {
  const font = useTTF(url);                 // suspends until the atlas is ready
  return (
    <Text fontFamilies={{ custom: font }} fontFamily="custom" fontSize={48} color="white">
      TTF Loader Example
    </Text>
  );
}

export function Page({ url }: { url: string }) {
  return (
    <Fullscreen flexDirection="column" alignItems="center" justifyContent="center" gap={24}>
      <Suspense fallback={<Text fontSize={24} color="gray">Loading font…</Text>}>
        <CustomFontText url={url} />
      </Suspense>
    </Fullscreen>
  );
}
```

`useTTF` also exposes `useTTF.preload(input)` and `useTTF.clear(input)` for warming or evicting
the cache (keyed on `[Symbol('ttf-loader'), input]`).

`input` is a `TTFInput`: either a URL string, or `{ url, …MSDFGeneratorOptions }` for one font,
or an array mixing both for several.

## Vanilla: `TTFLoader`

```ts
import { TTFLoader, Text } from "../uikit-tsl-core";

const loader = new TTFLoader();
const result = await loader.loadAsync("./BitcountPropSingle-Regular.ttf");

root.add(new Text({ fontSize: 48, color: "white", text: "TTF Loader Example" }));
// register `result` as a fontFamilies entry, exactly as in the React case
```

`TTFLoader`, `TTFInput`, `TTFInputItem`, `TTFLoaderOptions` and `MSDFResult` are all re-exported
from `../uikit-tsl-core/react` too, so React code need not reach into the vanilla barrel.

## Prerequisite: the bundler-side worker

The upload path needs `src/uikit-tsl-core/loaders/msdf-worker.ts`, which inlines the esbuild-bundled
Zappar worker **and** its WASM as base64 data URIs, so nothing is fetched at runtime. It is
generated, not hand-written — regenerating it is:

```bash
node scripts/build-msdf-assets.mjs
```

It is committed here (upstream gitignores it, which is why a raw upstream checkout cannot run
this path). If the module is missing the TTF load fails before any atlas work begins.

## Notes

- The repo contains no vendored `.ttf`, so both `ttf-*` examples fall back to the built-in Inter
  font; the loader wiring is intact and a URL is all that is missing.
- Generating an atlas is CPU work on the main thread — do it once and cache, not per component.

Source: `src/uikit-tsl-core/react/use-ttf.tsx`, `loaders/ttf.ts`,
`scripts/build-msdf-assets.mjs`, `TtfReactExample.tsx`, `TtfVanillaExample.tsx`.
