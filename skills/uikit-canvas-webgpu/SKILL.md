---
name: uikit-canvas-webgpu
description: The R3F <Canvas> every uikit-tsl page must use — WebGPURenderer, PCFShadowMap, and flat (NoToneMapping). Use when starting a new uikit page, when panels or MSDF text throw "Cannot read properties of undefined (reading 'replace')" out of resolveIncludes, or when the theme's pure white renders as grey #e3e3e3.
---

# Canvas for uikit-tsl

The TSL node materials behind panels and MSDF glyphs have **no GLSL fallback**. R3F's
`<Canvas>` defaults to `WebGLRenderer`, so a plain `<Canvas>` renders one console error per
frame and a blank scene. Every page goes through this wrapper.

```tsx
// src/examples-pages/UikitCanvas.tsx
import { Canvas } from "@react-three/fiber";
import type { ComponentProps } from "react";
import { useCallback } from "react";
import { PCFShadowMap, WebGPURenderer } from "three/webgpu";

type CanvasProps = ComponentProps<typeof Canvas>;

export function UikitCanvas({ gl: _ignored, ...props }: CanvasProps) {
  const gl = useCallback(async (bootstrapProps: unknown) => {
    const { canvas } = bootstrapProps as { canvas: HTMLCanvasElement };
    const renderer = new WebGPURenderer({ canvas, antialias: true });
    await renderer.init();
    return renderer;
  }, []);

  return (
    <Canvas
      gl={gl}
      shadows={{ type: PCFShadowMap }}
      style={{ height: "100%" }}
      {...props}
      flat
    />
  );
}
```

Usage — the three props are not optional:

```tsx
<UikitCanvas
  events={noEvents}                          // hand events to PointerEvents, not three's raycaster
  style={{ height: "100dvh", touchAction: "none" }}
  gl={{ localClippingEnabled: true }}         // needed wherever a panel clips
>
  <PointerEvents />
  <Fullscreen>…</Fullscreen>
</UikitCanvas>
```

## Why each part

- **`await renderer.init()`** resolves the platform's device and silently falls back to the
  WebGL2 backend when WebGPU is unavailable — in which case TSL still compiles to GLSL. So
  this is WebGPU-first, not WebGPU-only.
- **`shadows={{ type: PCFShadowMap }}`** — three removed `PCFSoftShadowMap` on the WebGPU
  backend and downgrades it to `PCFShadowMap` with a console warning. R3F's `shadows` default
  still selects the removed value, so pick the supported one up front.
- **`flat`** selects `NoToneMapping`. Panels try to opt out of tone mapping with
  `material.toneMapped = false`, but that is **inert on WebGPU** — the string `toneMapped`
  does not exist anywhere in three's WebGPU build, and tone mapping is decided per-render from
  the *renderer* (`RenderOutputNode.setup` reads `renderer.toneMapping`). Without `flat`,
  R3F's ACES filmic crushes the theme's `#ffffff` to `#e3e3e3` and flattens every light
  surface into the same grey.

See also: [[uikit-pointer-events]], [[uikit-overflow-scroll-clipping]].

Source: `src/examples-pages/UikitCanvas.tsx`; tone-mapping note in
`src/uikit-tsl-core/panel/material/create.ts:113`.
