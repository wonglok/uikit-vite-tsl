/**
 * Port of upstream `examples/ttf-vanilla` (the vanilla, non-React API).
 *
 * Upstream builds the scene imperatively and generates an MSDF atlas at runtime
 * from a local `BitcountPropSingle-Regular.ttf` via `TTFLoader`. That font file
 * is not vendored into this repo and the upstream example has no remote URL for
 * it, so per the port's asset policy the text falls back to the built-in font
 * (Inter, via `@pmndrs/msdfonts`); the `TTFLoader`/`fontFamilies` wiring is
 * therefore dropped. `TTFLoader` from `../uikit-tsl-core` is wired up and works
 * when given a TTF URL.
 *
 * The imperative setup is re-expressed as R3F: the vanilla construction runs in
 * an effect inside an inner component that reads the renderer, camera and scene
 * from `useThree()`. There is no manual `WebGLRenderer` / animation loop — R3F
 * drives the frames, and `forwardHtmlEvents` (still required for uikit input) is
 * pumped from `useFrame` instead.
 *
 * The scene renders through `UikitCanvas` (WebGPURenderer) — the port's TSL
 * materials have no GLSL fallback.
 */
import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { noEvents } from "@react-three/xr/dist/events.js";
import { forwardHtmlEvents } from "@pmndrs/pointer-events";
import { Color, type PerspectiveCamera } from "three";
import { Container, reversePainterSortStable, Text } from "../uikit-tsl-core";
import { UikitCanvas } from "./UikitCanvas";

function TtfVanillaScene() {
  const gl = useThree((state) => state.gl);
  const camera = useThree((state) => state.camera);
  const scene = useThree((state) => state.scene);
  const rootRef = useRef<Container | null>(null);
  const updateEventsRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    scene.background = new Color("black");
    gl.localClippingEnabled = true;
    gl.setTransparentSort(reversePainterSortStable);

    const { update } = forwardHtmlEvents(gl.domElement, camera as PerspectiveCamera, scene);
    updateEventsRef.current = update;

    const root = new Container({
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 24,
    });
    root.position.z = -2
    scene.add(root)
    rootRef.current = root

    root.add(new Text({ fontSize: 48, color: "white", text: "TTF Loader Example" }))
    root.add(
      new Text({
        fontSize: 24,
        color: "gray",
        text: "Loading fonts at runtime with @pmndrs/uikit-ttf",
      }),
    )

    return () => {
      scene.remove(root)
      rootRef.current = null
      updateEventsRef.current = null
    }
  }, [gl, camera, scene])

  useFrame((_, delta) => {
    updateEventsRef.current?.()
    rootRef.current?.update(delta * 1000)
  })

  return null
}

export function TtfVanillaExample() {
  return (
    <UikitCanvas
      events={noEvents}
      style={{ height: "100%", touchAction: "none" }}
      camera={{ fov: 70, near: 0.01, far: 100, position: [0, 0, 5] }}
    >
      <TtfVanillaScene />
    </UikitCanvas>
  )
}
