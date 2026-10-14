---
name: uikit-fullscreen-camera-parent
description: A uikit Fullscreen must be a child of the camera, and that camera must be in the scene graph, or the whole UI is invisible. Use when a Fullscreen subtree renders nothing, when the vanilla API is used to build a fullscreen UI, or when deciding whether Fullscreen or Root is the right root.
---

# A Fullscreen hangs off the camera

`Fullscreen.update()` walks its ancestors looking for a `Camera`; without one it never computes
a layout. And the camera itself has to be traversed by the renderer, which means it must be
**inside the scene graph**. A camera that is not in the scene is never traversed, so the entire
uikit subtree stays invisible even though nothing throws.

## React — handled for you

The React `Fullscreen` in `src/uikit-tsl-core/react` attaches the camera to the scene on the
first frame and detaches it on unmount. `attachCamera` (default `true`) controls it:

```tsx
import { Fullscreen } from "../uikit-tsl-core/react";

<UikitCanvas>
  <Fullscreen distanceToCamera={100} backgroundColor={0xffffff} dark={{ backgroundColor: 0x0 }}>
    …
  </Fullscreen>
</UikitCanvas>
```

Pass `attachCamera={false}` only when some other code owns the camera's parentage.

## Vanilla — you must do it yourself

This is the step that is easy to drop and impossible to debug from the symptom:

```ts
const fullscreen = new Fullscreen(gl, {
  distanceToCamera: 3.2,
  flexDirection: "row",
  gap: 18,
  padding: 24,
  backgroundColor: 0xf7f9fc,
});

// Order matters, and BOTH lines are load-bearing.
scene.add(camera);        // otherwise the renderer never traverses the camera…
camera.add(fullscreen);   // …and Fullscreen.update() finds no Camera ancestor.

// Each frame, in this order:
useFrame((_, delta) => {
  updateEventsRef.current?.();          // pump pointer events first
  fullscreen.update(delta * 1000);      // then lay out  (milliseconds, not seconds)
});
```

Cleanup unwinds in reverse — `camera.remove(fullscreen)` then `scene.remove(camera)`.

See also: [[uikit-vanilla-imperative]], [[uikit-root-vs-fullscreen]].

Source: `src/examples-pages/VanillaExample.tsx:104-121`.
