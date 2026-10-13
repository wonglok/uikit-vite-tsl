import { Canvas } from "@react-three/fiber";
import type { ComponentProps } from "react";
import { useCallback } from "react";
import { WebGPURenderer } from "three/webgpu";

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
 */
export function UikitCanvas({ gl: _ignored, ...props }: CanvasProps) {
  const gl = useCallback(async (bootstrapProps: unknown) => {
    const { canvas } = bootstrapProps as { canvas: HTMLCanvasElement };
    const renderer = new WebGPURenderer({ canvas, antialias: true });
    await renderer.init();
    return renderer;
  }, []);

  return <Canvas gl={gl} style={{ height: "100%" }} {...props} />;
}
