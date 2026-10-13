/**
 * Port of upstream `examples/ttf-react`.
 *
 * Upstream generates an MSDF atlas at runtime from a local
 * `BitcountPropSingle-Regular.ttf`, loaded through `useTTF`. That font file is
 * not vendored into this repo and the upstream example has no remote URL for
 * it, so per the port's asset policy the text falls back to the built-in font
 * (Inter, via `@pmndrs/msdfonts`). The upstream `Suspense`/`Loading` fallback
 * existed only for the TTF fetch and is dropped with it.
 *
 * `useTTF` from `../uikit-tsl-core/react` is wired up (runtime atlas generation
 * via `@zappar/msdf-generator`) and works when given a TTF URL; restoring the
 * custom font is a two-line change here.
 *
 * The scene renders through `UikitCanvas` (WebGPURenderer) — the port's TSL
 * materials have no GLSL fallback.
 */
import { noEvents, PointerEvents } from "@react-three/xr/dist/events.js";
import { Fullscreen, Text } from "../uikit-tsl-core/react";
import { UikitCanvas } from "./UikitCanvas";

export function TtfReactExample() {
  return (
    <UikitCanvas events={noEvents} style={{ height: "100%", touchAction: "none" }}>
      <PointerEvents />
      <color attach="background" args={["black"]} />
      <Fullscreen flexDirection="column" alignItems="center" justifyContent="center" gap={24}>
        <Text fontSize={48} color="white">
          TTF Loader Example
        </Text>
        <Text fontSize={24} color="gray">
          Loading fonts at runtime with @react-three/uikit-ttf
        </Text>
      </Fullscreen>
    </UikitCanvas>
  );
}
