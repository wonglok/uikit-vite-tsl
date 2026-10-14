---
name: uikit-content-nested-scene
description: Embeds a real three.js scene inside a uikit panel with <Content>. Use when a UI panel must show 3D geometry, a product preview or a render target, when a Content panel renders empty, or when a makeDefault camera inside a panel breaks click hit-testing.
---

# `<Content>` — 3D inside a panel

`Content` is a uikit panel whose surface is supplied by a nested R3F subtree instead of a flat
background. Children are ordinary three.js objects, in the panel's local space.

```tsx
import { Content, Root, Text } from "../uikit-tsl-core/react";
import { geometry } from "maath";

const cardGeometry = new geometry.RoundedPlaneGeometry(1, 1, 0.025);

<Root flexDirection="column" pixelSize={0.01} sizeX={4.4}>
  <Content
    transformTranslateZ={1}      // lift off the panel surface to avoid z-fighting
    padding={14}
    keepAspectRatio={false}
    width="100%"
    height={400}
  >
    <mesh geometry={cardGeometry}>
      <meshStandardMaterial color="#334155" />
    </mesh>
    <ambientLight intensity={Math.PI} />
  </Content>
  <Text>Caption below the viewport</Text>
</Root>
```

`Content` is a `Root`-like child: it carries the layout scale of its parent panel as a matrix,
so its own `pixelSize` follows the panel's. Geometry sizes are in the panel's local units, not
px — the `RoundedPlaneGeometry(1, 1, …)` above spans the panel because the content box is 1 unit
across, not 400.

## The camera trap

Do **not** put a `makeDefault` camera inside a `Content`.

```tsx
// ✗ render keeps working, hit-testing silently breaks
<Content width="100%" height={400}>
  <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
</Content>
```

`Content` is a uikit panel, so the camera is a child of an object whose matrix carries the
layout scale (here 4.4 × 4). The camera's `matrixWorld` inherits that non-uniform scale. Rendering
survives — the view matrix is rebuilt from `matrixWorld` — but `matrixWorldInverse`, which
`Raycaster.setFromCamera` and every event hit-test depend on, goes stale and rigid. The raycast
camera stops matching the render camera and clicks land in the wrong place, typically tens of
world units off. (In `CardExample` the `Switch` sat ~15 world units off its own ray.)

The correct setup is one canvas camera plus a rig that moves it:

```tsx
<UikitCanvas camera={{ position: [0, 0, 18], fov: 32.5 }}>
  <Rig />            {/* damping the canvas camera toward the pointer */}
  <Root …>…</Root>
</UikitCanvas>
```

`Content` also honours `keepAspectRatio` — set it `false` when the panel and the nested scene
should not share an aspect, `true` (default) when the scene should letterbox inside the box.

See also: [[uikit-root-vs-fullscreen]], [[uikit-canvas-webgpu]].

Source: `src/examples-pages/CardExample.tsx:140-193`.
