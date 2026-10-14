---
name: uikit-input-text-selection
description: Text entry fields in uikit — the core Input/Textarea, the default kit's styled Input, canvasInputProps for caret and selection, and password/email variants. Use when adding a form field, when typing does nothing, when the caret or text selection misbehaves, or when picking between the two components named Input.
---

# Input fields

## Two components are called `Input`

```tsx
// Unstyled core field — the primitive. Use when you want full control / raw behaviour.
import { Input, Textarea } from "../uikit-tsl-core/react";

// Styled shadcn field, themed with the default kit (border, height, placeholder colour).
import { Input } from "../uikit-tsl-core/kits/default/react";
import { Textarea } from "../uikit-tsl-core/kits/default/react";
```

They are different components with different prop surfaces. Importing the wrong one is the usual
cause of "the field has no styling" / "the field has no focus behaviour". Form pages
(`AuthExample`) use the default-kit one; primitive or vanilla code uses the core one.

## Required canvas wiring

Text entry does nothing until the canvas carries `canvasInputProps`. It handles the
keyboard-selection bridge (`cancelBlur` / `preventDefault` on pointer-down) defined in
`src/uikit-tsl-core/text/selection/pointer.ts`:

```tsx
import { canvasInputProps } from "../uikit-tsl-core/react";
import { noEvents, PointerEvents } from "@react-three/xr/dist/events.js";

<UikitCanvas events={noEvents} {...canvasInputProps} gl={{ localClippingEnabled: true }}>
  <PointerEvents />
  <Fullscreen>…</Fullscreen>
</UikitCanvas>
```

`<PointerEvents />` is also required — without it the field never receives a pointer at all.

## Fields

```tsx
<Input autocomplete="email" placeholder="name@example.com" />
<Input autocomplete="current-password" type="password" placeholder="password" />
<Input width={200} placeholder="Email" />
<Textarea width={200} placeholder="Email" />
```

Sizing is layout, not HTML: `width={200}` is 200px at the panel's `pixelSize`.

## Selection and caret

The selection model is exposed for custom rendering — `CaretTransformation` and
`SelectionTransformation` are exported from `../uikit-tsl-core`:

```tsx
import type { CaretTransformation, SelectionTransformation } from "../uikit-tsl-core";
```

Reach for these only when drawing a custom caret; the built-in field already renders both. A
session-typing surface usually wants `frameloop="demand"` plus a frame counter, so the scene
re-renders while the field is live and idles when it is not.

See also: [[uikit-pointer-events]], [[uikit-zustand-store]].

Source: `AuthExample.tsx:30-31`, `DefaultExample.tsx:588-594`, `text/selection/pointer.ts:20`.
