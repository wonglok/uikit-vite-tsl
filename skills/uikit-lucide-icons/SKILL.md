---
name: uikit-lucide-icons
description: Uses the vendored lucide icon set inside uikit — the React set in kits/lucide/react, the vanilla set in kits/lucide, <Name> vs <Name>Icon naming, colour and sizing, and the Image name collision. Use when adding an icon to a uikit component, when an icon import fails, or when enumerating the whole set.
---

# Lucide icons

The full lucide set is vendored as generated uikit `Svg` subclasses — 1 593 icon modules. Each
module exports the icon twice: as `<Name>Icon` (the class/component) and as `<Name>` (an alias).
Either name imports.

Two entries, one per API:

```tsx
// React components — the usual choice
import { BellRing, Check, Plus } from "../uikit-tsl-core/kits/lucide/react";
import { PlusIcon } from "../uikit-tsl-core/kits/lucide/react";   // identical component

// Vanilla classes — for the imperative API
import { PlusIcon } from "../uikit-tsl-core/kits/lucide";
```

Note the asymmetry: the vanilla set is `kits/lucide` itself, the React set is
`kits/lucide/react`. Both share module filenames.

## Using one

```tsx
// Sized to the line it sits on, tinted to match.
<Button variant="outline" flexDirection="row">
  <Github width={16} height={16} marginRight={8} />
  <Text>GitHub</Text>
</Button>

<Button variant="ghost" justifyContent="flex-start">
  <Package marginRight={8} width={16} height={16} />
  <Text>Models</Text>
</Button>

// Tinted from the theme.
<DollarSign width={16} height={16} color={colors.mutedForeground} />
```

Icons default to `width: 24, height: 24`. They are `Svg` components whose markup uses
`stroke="currentColor"`, so `color` genuinely recolours them and they inherit surrounding ink
otherwise. Layout props (`marginRight`, `flexShrink`, `opacity`, …) apply as on any panel.

## Inside a kit component

```tsx
<Button flexDirection="row" width="100%">
  <Check marginRight={8} height={16} width={16} />
  <Text>Mark all as read</Text>
</Button>

<Alert maxWidth={500}>
  <AlertIcon>
    <Terminal width={16} height={16} />
  </AlertIcon>
  <AlertTitle><Text>Error</Text></AlertTitle>
</Alert>
```

Kit slots (`AlertIcon`, `ButtonIcon`) place the icon; you still supply the sizing.

## Enumerating the set

Every icon is a plain export, so `Object.values` walks them:

```tsx
import * as Icons from "../uikit-tsl-core/kits/lucide/react";

<Fullscreen flexDirection="row" flexWrap="wrap" overflow="scroll" gap={10} padding={10}>
  {Object.values(Icons as Record<string, (typeof Icons)["AArrowDown"]>)
    .filter((Icon, i) => i % 2 === 0)          // skip the <Name>/<Name>Icon duplicates
    .map((Icon, i) => <Icon key={i} />)}
</Fullscreen>
```

The `i % 2 === 0` filter is not cosmetic: each module contributes both spellings, so without it
every icon renders twice.

## Naming collision with `Image`

The icon named `Image` collides with the core `Image` component. Rename on import:

```tsx
import { Image as ImageIcon } from "../uikit-tsl-core/kits/lucide/react";
```

The same trap applies to any lucide name that matches a layout primitive — check before
importing both in one file.

## Vanilla

```ts
import { PlusIcon } from "../uikit-tsl-core/kits/lucide";

const icon = new PlusIcon({ width: 16, height: 16 });
parent.add(icon);
```

See also: [[uikit-image-and-svg]], [[uikit-vanilla-imperative]], [[uikit-horizon-panel-material]].

Source: `LucideExample.tsx:33-37`, `DefaultExample.tsx:217-221`, `MarketExample.tsx:22-32`,
`VanillaExample.tsx:48-49`.
