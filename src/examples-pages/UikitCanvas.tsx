import { Canvas } from "@react-three/fiber";
import type { ComponentProps } from "react";
import { useCallback } from "react";
import { PCFShadowMap, WebGPURenderer } from "three/webgpu";

type CanvasProps = ComponentProps<typeof Canvas>;

/**
 * The Canvas every example page must use.
 *
 * This matters more than it looks. R3F's `<Canvas>` defaults to a WebGLRenderer,
 * and the TSL node materials this port uses for panels and MSDF glyphs have NO
 * GLSL fallback — under WebGL they throw
 * `Cannot read properties of undefined (reading 'replace')` from
 * `resolveIncludes` inside `new WebGLProgram`, once per frame.
 *
 * So examples must render through WebGPURenderer, exactly as the main app does.
 * `init()` resolves the platform's device and silently falls back to the WebGL2
 * backend if WebGPU is unavailable (in which case TSL still compiles to GLSL).
 *
 * Two renderer defaults are also pinned here because their upstream equivalents
 * are inert or warn on WebGPU:
 *
 * - `shadows={{ type: PCFShadowMap }}` — three removed `PCFSoftShadowMap` on the
 *   WebGPU backend and silently downgrades it to `PCFShadowMap` with a console
 *   warning. R3F's `shadows` default still selects the removed value, so we set
 *   the supported type up front.
 *
 * - `flat` — upstream opts panels out of tone mapping with
 *   `material.toneMapped = false`, which is inert on WebGPURenderer. R3F defaults
 *   to ACES filmic tone mapping, which was crushing the theme's pure white
 *   (#ffffff) to #e3e3e3, so we select NoToneMapping at the renderer instead.
 */
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
