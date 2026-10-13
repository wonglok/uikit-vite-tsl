/**
 * Port of upstream `examples/uikit`.
 *
 * The upstream scene also mounts `Video` (from a local mp4) and `Portal`
 * (rendering a nested R3F scene into a render target, displayed through an
 * `<Image>`). Both are omitted here: the video asset is not vendored, and the
 * scene as it stands already covers what this example is for.
 *
 * `Portal` in particular is no longer blocked — the per-instance clipping it
 * needed is implemented in `panel/instance/group.ts` and
 * `panel/material/create.ts`, and `<Image>` renders (see `createPanelMaterial`'s
 * note on `material.map` and on why uniform sync cannot use
 * `material.onBeforeRender`). It can be added back whenever this example needs to
 * exercise it.
 *
 * Everything else is faithful.
 */
import { Box, OrbitControls } from "@react-three/drei";
import { noEvents, PointerEvents } from "@react-three/xr/dist/events.js";
import { Container, Fullscreen, Image, Text } from "../uikit-tsl-core/react";
import { UikitCanvas } from "./UikitCanvas";

export function UikitExample() {
  return (
    <UikitCanvas events={noEvents} style={{ height: "100%", touchAction: "none" }}>
      <PointerEvents />
      <OrbitControls />
      <Box />
      <color attach="background" args={["black"]} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={10} position={[5, 1, 10]} />

      <Fullscreen backgroundColor="red" padding={12} gap={12}>
        <Container padding={12} backgroundColor="blue">
          <Text backgroundColor="green" color="white">
            Hello World
          </Text>
        </Container>
        <Image src="https://picsum.photos/id/237/200/300" width={100} />
      </Fullscreen>
    </UikitCanvas>
  );
}
