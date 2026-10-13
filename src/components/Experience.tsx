import { Canvas } from "@react-three/fiber";
import { Suspense, useCallback } from "react";
import { WebGPURenderer } from "three/webgpu";
import { useSceneStore } from "../store/useSceneStore";
import { UikitProbe } from "./UikitProbe";

/**
 * R3F hands the gl factory the props it would have passed to a WebGLRenderer.
 * We only forward the ones WebGPU actually understands and let `init()` decide
 * whether the platform really gives us a WebGPU device or falls back to WebGL2.
 *
 * `props` is typed `unknown` deliberately: R3F's own `DefaultGLProps` is not
 * exported, and it declares a shadowing `OffscreenCanvas` interface that no
 * locally written type can match structurally.
 */
export function Experience() {
  const gl = useCallback(async (props: unknown) => {
    const { canvas } = props as { canvas: HTMLCanvasElement };

    const renderer = new WebGPURenderer({ canvas, antialias: true });

    await renderer.init();

    const backend = renderer.backend as { isWebGPUBackend?: boolean };
    useSceneStore
      .getState()
      .setBackend(backend.isWebGPUBackend ? "webgpu" : "webgl");

    return renderer;
  }, []);

  return (
    <Canvas
      gl={gl}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      className="absolute inset-0"
    >
      <color attach="background" args={["#05060a"]} />

      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 3]} intensity={2.4} color="#ffd9c2" />
      <directionalLight
        position={[-5, -2, -4]}
        intensity={1.1}
        color="#4f7cff"
      />

      <Suspense fallback={null}>
        <UikitProbe />
      </Suspense>
    </Canvas>
  );
}
