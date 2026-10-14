---
name: uikit-pointer-events
description: Makes uikit panels clickable — <PointerEvents /> plus events={noEvents} on the Canvas, and canvasInputProps for text input. Use when buttons, switches, dialogs or hover styles do nothing, when clicks land in the wrong place, or when a uikit <Input>/<Textarea> cannot be focused or typed into.
---

# Pointer events

uikit panel meshes deliberately opt out of three's raycaster — `raycast()` and `spherecast()`
are no-ops and `pointerEvents = 'none'` in `src/uikit-tsl-core/panel/instance/mesh.ts`. The
spherecast event manager is therefore the **only** thing that can hit a uikit component.

```tsx
import { noEvents, PointerEvents } from "@react-three/xr/dist/events.js";
import { UikitCanvas } from "./UikitCanvas";

export function Page() {
  return (
    <UikitCanvas events={noEvents} style={{ height: "100dvh", touchAction: "none" }}>
      <PointerEvents />
      <Fullscreen>…</Fullscreen>
    </UikitCanvas>
  );
}
```

Without this pair nothing on the page is interactive: the card never toggles, the switch never
flips, `hover={{ … }}` never fires, and a `DialogTrigger` does nothing. Upstream's own
`examples/card/src/App.tsx` carries neither, which is why its card is inert — the other eight
upstream examples all mount `<PointerEvents />`.

## Typing into a uikit `<Input>`

Add `canvasInputProps` to the Canvas. It is the keyboard-selection glue for
`src/uikit-tsl-core/components/input.ts` / `textarea.ts`.

```tsx
import { canvasInputProps } from "../uikit-tsl-core/react";

<UikitCanvas
  events={noEvents}
  {...canvasInputProps}
  gl={{ localClippingEnabled: true }}
>
  <PointerEvents />
  <Fullscreen>…</Fullscreen>
</UikitCanvas>
```

```tsx
<Input autocomplete="email" placeholder="name@example.com" />
<Input autocomplete="current-password" type="password" placeholder="password" />
```

## Related canvas settings

- `gl={{ localClippingEnabled: true }}` — a WebGL-only flag that does nothing on WebGPU; kept
  for parity. Clipping happens inside the materials instead (see
  [[uikit-overflow-scroll-clipping]]).
- `frameloop="demand"` — the static pages (`auth`, `dashboard`, `market`) use this plus a
  frame counter to prove the scene really only renders when something changes.
- `camera={{ position: [0, 0, 18], fov: 35 }}` — the flat-UI pages all use this camera.

See also: [[uikit-canvas-webgpu]], [[uikit-input-text-selection]], [[uikit-hover-and-cursor]].

Source: `src/examples-pages/CardExample.tsx:24`, `AuthExample.tsx:193`,
`UikitExample.tsx:19`, `panel/instance/mesh.ts`.
