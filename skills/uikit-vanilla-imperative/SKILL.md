---
name: uikit-vanilla-imperative
description: Builds uikit UI without React — the vanilla API's constructors, add(), the per-frame update(delta) contract, forwardHtmlEvents, and how to drive it from R3F. Use when writing framework-free uikit code, when embedding uikit in an existing three.js app, or when a vanilla scene lays out but never updates.
---

# The vanilla API

Everything the React layer does is a thin wrapper over these classes: `Container`, `Fullscreen`,
`Text`, `Image`, `Svg`, `Video`, `Input`, `Textarea`, `Custom`, `Content`, plus the kit classes
(`Button`, `ProgressBar`, `Panel`, the lucide icons, …). They are plain classes extending
`Object3D` — you construct them, `add()` them, and update them yourself.

```ts
import { Container, Fullscreen, Text } from "../uikit-tsl-core";
import { Button, Panel, ProgressBar } from "../uikit-tsl-core/kits/horizon/core";
```

## The four contracts

**1. A `Fullscreen` is constructed with the renderer, and lives on the camera.**

```ts
const fullscreen = new Fullscreen(gl, {
  distanceToCamera: 3.2,
  flexDirection: "row",
  gap: 18,
  padding: 24,
  backgroundColor: 0xf7f9fc,
});

scene.add(camera);          // both lines load-bearing — see [[uikit-fullscreen-camera-parent]]
camera.add(fullscreen);
```

A plain `Container` needs no renderer: `new Container({ flexDirection: "column", gap: 24 })`.

**2. Layout only happens in `update(deltaMs)`, and the argument is milliseconds.**

```ts
fullscreen.update(delta * 1000);   // R3F hands you delta in SECONDS
```

A vanilla scene that renders but never lays out is almost always a missing or `delta`-less
`update()` call.

**3. Input needs `forwardHtmlEvents` pumped every frame.**

```ts
import { forwardHtmlEvents } from "@pmndrs/pointer-events";
import type { PerspectiveCamera } from "three";

const { update } = forwardHtmlEvents(gl.domElement, camera as PerspectiveCamera, scene);

useFrame((_, delta) => {
  update();                 // BEFORE update(), so hit-tests use this frame's layout
  fullscreen.update(delta * 1000);
});
```

**4. Renderer settings the panels depend on.**

```ts
gl.localClippingEnabled = true;
gl.setTransparentSort(reversePainterSortStable);   // from "../uikit-tsl-core"
scene.background = new Color(0xf6f8fb);
```

`reversePainterSortStable` is the uikit painter-order comparator; without it transparent panels
sort by three's default and z-order between overlapping panels goes wrong.

## Building a tree

Constructor props are the same objects the React layer passes through.

```ts
const root = new Container({ flexDirection: "column", gap: 12, padding: 18 });
root.position.z = -2;
scene.add(root);

const addText = (parent: Container, text: string, props = {}) => {
  const element = new Text({ text, ...props });
  parent.add(element);
  return element;
};

addText(root, "Operations Console", { fontSize: 21, fontWeight: 700, lineHeight: "110%" });
addText(root, "Synthetic but dashboard-shaped.", { color: 0x667085, fontSize: 12 });
root.add(new Button({ size: "sm", variant: "primary", onClick: () => console.log("clicked") }));
```

A small generic helper keeps the tree readable, mirroring what the React layer's `build` does:

```ts
const ui = <T extends Container>(
  ComponentClass: new (properties?: any) => T,
  properties: any,
  parent?: Container,
): T => {
  const element = new ComponentClass(properties);
  parent?.add(element);
  return element;
};

const card = ui(Container, { width: 112, height: 98, flexDirection: "column", gap: 10 }, root);
card.add(new ProgressBar({ width: "100%", value: 42 }));
```

## Updating values later

Every property is settable after construction, and accepting a signal here too:

```ts
bars[i]!.setProperties({ value: (20 + i * 7 + time * 0.018) % 100 });
```

That is how the vanilla dashboard animates 160 progress bars per frame without touching React.

## Driving it from R3F

The recommended wrapper: put the imperative setup in one `useEffect` inside an inner component
that reads `gl`, `camera` and `scene` from `useThree()`, and let R3F own the loop. No manual
`WebGLRenderer`, no `setAnimationLoop`, no resize handling — `useFrame` pumps the two updates.

```tsx
function VanillaScene() {
  const gl = useThree((s) => s.gl);
  const camera = useThree((s) => s.camera);
  const scene = useThree((s) => s.scene);
  const fullscreenRef = useRef<Fullscreen | null>(null);
  const updateEventsRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    /* …all of the setup above… */
    return () => {                       // unwind in reverse, or a hot reload stacks scenes
      camera.remove(fullscreen);
      scene.remove(camera);
      fullscreenRef.current = null;
      updateEventsRef.current = null;
    };
  }, [gl, camera, scene]);

  useFrame((_, delta) => {
    updateEventsRef.current?.();
    fullscreenRef.current?.update(delta * 1000);
  });

  return null;
}

export function Page() {
  return (
    <UikitCanvas events={noEvents} style={{ height: "100%", touchAction: "none" }}>
      <VanillaScene />
    </UikitCanvas>
  );
}
```

## Kit classes

Kits expose vanilla classes from their `core` entry, and React wrappers from `react`:

```ts
import { Button, ProgressBar } from "../uikit-tsl-core/kits/horizon/core";   // vanilla
import { Button, ProgressBar } from "../uikit-tsl-core/kits/horizon/react";  // React
```

Note the asymmetry for icons: `kits/lucide` is the vanilla set (`new PlusIcon()`) and
`kits/lucide/react` the React one — see [[uikit-lucide-icons]].

See also: [[uikit-fullscreen-camera-parent]], [[uikit-signals-reactive-props]].

Source: `src/examples-pages/VanillaExample.tsx`, `TtfVanillaExample.tsx`.
