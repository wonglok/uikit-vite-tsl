---
name: uikit-image-and-svg
description: Renders bitmap images (Image) and inline SVG (Svg) inside uikit panels, including objectFit/aspectRatio, texture loading, and why this repo serves images locally instead of from a CDN. Use when adding pictures, avatars or logos to a uikit layout, when an image renders as a blank panel, or when a remote image silently fails.
---

# `Image` and `Svg`

`Image` draws a texture into the layout box. `Svg` rasterises inline markup. Both are layout
citizens — they size, clip and position like any `Container`.

## `Image`

```tsx
import { Image } from "../uikit-tsl-core/react";
import { imagePath, avatarPath } from "../sample-images/paths";

<Image
  src={imagePath("uikit-hero")}
  width={100}
  borderRadius={6}
  objectFit="cover"          // cover | contain | fill
  aspectRatio={3 / 4}        // wins over `height` when set
/>

<Avatar src={avatarPath("Scot")} width={40} />
```

`src` accepts a URL string **or** a `THREE.Texture`. The texture loads asynchronously: the panel
is built first and `material.map` is assigned when it arrives, which is why the material reads
its diffuse colour through three's reference nodes rather than a baked `colorNode`
(`panel/material/create.ts:169`). Practically: don't expect the image in the first frame, and
don't try to `await` it.

## `Svg`

```tsx
import { Svg } from "../uikit-tsl-core/react";

<Svg
  width={24}
  height={24}
  marginRight={8}
  content={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2"><path d="M15 6v12a3 3 0 1 0 3-3H6…"/></svg>`}
/>
```

`content` is a markup string; `stroke="currentColor"` and the surrounding text `color` interact,
so a logo can inherit the panel's ink. The lucide kits are generated `Svg` subclasses and are
usually the better choice for icons — see [[uikit-lucide-icons]].

Text inside an `Svg`-adjacent row should be a sibling, not a child:

```tsx
<Button variant="outline">
  <Svg content={gitHubMark} width={16} height={16} marginRight={8} />
  <Text>GitHub</Text>
</Button>
```

## Local assets, not CDNs — and why

All imagery in this repo is generated once into `public/sample-images/` and addressed through
`src/sample-images/paths.ts`:

```ts
samplePath("avatar", "Scot")   // → /sample-images/avatar-scot.png
avatarPath("Scot")             // same, avatar flavour
imagePath("uikit-hero")        // → /sample-images/image-uikit-hero.png
```

The examples used to pull from unsplash, picsum, `avatar.iran.liara.run`, dicebear and
raw.githubusercontent.com. Several of those send **no `Access-Control-Allow-Origin` header**, so
the browser blocked every request and the element quietly rendered nothing — a blank panel with
no error. They also made the examples depend on the network. Serving from `public/` means plain
static files: no bundler import, no data URL, no CORS, no network.

`slugify` lowercases the seed and collapses non-alphanumerics to single dashes, which is why
seeds like `"market:React Rendezvous"` map to `image-market-react-rendezvous.png`.

See also: [[uikit-lucide-icons]], [[uikit-content-nested-scene]].

Source: `src/sample-images/paths.ts`, `CardExample.tsx:219-230`, `AuthExample.tsx:55-62`.
