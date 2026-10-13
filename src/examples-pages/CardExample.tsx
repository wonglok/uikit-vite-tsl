/**
 * Port of upstream `examples/card` (App.tsx + src/components/Simulation.tsx).
 *
 * The multi-file example is collapsed into this single file (the router loads
 * one file per example), so `Simulation.tsx`'s helpers would normally be inlined.
 *
 * Omissions / adaptations vs. upstream:
 *  - `@react-three/rapier` is NOT installed in this repo, so the physics scene is
 *    dropped entirely (`Physical`, `Pointer`, `RigidShape`). The uikit cards are
 *    rendered statically; the card still opens/closes on click, but nothing
 *    reacts to a simulated 3D world.
 *  - The physics scene and the floating shapes both loaded a local
 *    `smileys-transformed.glb`, which is not vendored. They are omitted for that
 *    reason as well.
 *  - The card hero used drei's `<MeshPortalMaterial>` + drei `<Float>` to preview
 *    the physics world. With no physics/asset that preview is empty, so the hero
 *    is replaced by a static rounded-plane mesh (kept at the same size/position).
 *  - Upstream wrapped the scene in `<Defaults>` from `@react-three/uikit-default`;
 *    that component does not exist in the vendored kit, so lights are mounted
 *    directly under the Canvas and the card containers under `<Root>`.
 *  - One `overflow="hidden"` container is kept for the slide-up layout, but
 *    per-instance clipping is disabled in this TSL port, so the covered card is
 *    not visually clipped (this is the intended reveal effect here).
 */
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { signal } from "@preact/signals-core";
import { easing, geometry } from "maath";
import { UikitCanvas } from "./UikitCanvas";
import {
  Container,
  Content,
  Fullscreen,
  Root,
  Text,
  setPreferredColorScheme,
} from "../uikit-tsl-core/react";
import { BellRing, Check } from "../uikit-tsl-core/kits/lucide/react";
import {
  Avatar,
  Button,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Switch,
  colors,
} from "../uikit-tsl-core/kits/default/react";

setPreferredColorScheme("light");

const notifications = [{ title: "Your call has been confirmed.", description: "1 hour ago" }];

export function CardExample() {
  return (
    <UikitCanvas
      camera={{ position: [0, 0, 18], fov: 32.5 }}
      style={{ height: "100%", touchAction: "none" }}
      gl={{ localClippingEnabled: true }}
    >
      <ambientLight intensity={Math.PI} />
      <spotLight decay={0} position={[0, 5, 10]} angle={0.25} penumbra={1} intensity={2} castShadow />
      <CardPage />
      <Fullscreen flexDirection="column" justifyContent="flex-end" alignItems="center" paddingBottom={32}>
        <Button onClick={() => window.open("https://github.com/pmndrs/uikit/tree/main/examples/card", "_blank")}>
          <Text>Source Code</Text>
        </Button>
      </Fullscreen>
      <Environment preset="city" />
      <Rig />
    </UikitCanvas>
  );
}

function Rig() {
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [state.pointer.x * 2, state.pointer.y * 2, 18], 0.35, delta);
    state.camera.lookAt(0, 0, -10);
  });
  return null;
}

const cardGeometry = new geometry.RoundedPlaneGeometry(1, 1, 0.025);

function CardPage() {
  const openRef = useRef(false);
  const translateY = useMemo(() => signal(-460), []);
  const translateZ = useMemo(() => signal(0), []);
  useFrame((_, delta) => {
    easing.damp(translateY, "value", openRef.current ? 0 : -460, 0.2, delta);
    easing.damp(translateZ, "value", openRef.current ? 200 : 0, 0.2, delta);
  });
  return (
    <Root flexDirection="column" pixelSize={0.01} sizeX={4.4}>
      <Container
        backgroundColor={0xffffff}
        dark={{ backgroundColor: 0x0 }}
        borderRadius={20}
        onClick={(e) => (e.stopPropagation(), (openRef.current = !openRef.current))}
        cursor="pointer"
        flexDirection="column"
        zIndex={10}
        transformTranslateZ={translateZ}
      >
        {/* Upstream previewed a rapier physics scene here via a MeshPortalMaterial. */}
        <Content transformTranslateZ={1} padding={14} keepAspectRatio={false} width="100%" height={400}>
          <mesh geometry={cardGeometry}>
            <meshStandardMaterial color="#334155" />
          </mesh>
          <ambientLight intensity={Math.PI} />
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        </Content>
        <Container
          backgroundColor={0xffffff}
          dark={{ backgroundColor: 0x0 }}
          flexDirection="row"
          padding={28}
          paddingTop={28 + 4}
          alignItems="center"
          justifyContent="space-between"
          borderBottomRadius={20}
          castShadow
        >
          <Container flexDirection="column" gap={8}>
            <Text fontWeight="normal" fontSize={24} lineHeight="100%">
              VanArsdel Marketing
            </Text>
            <Text fontSize={20} fontWeight="medium" letterSpacing={-0.4} color={colors.primary}>
              1 activities for you
            </Text>
          </Container>
          <Container flexDirection="row">
            <Avatar width={40} src="https://avatar.iran.liara.run/public/boy?username=Scot" />
            <Avatar marginLeft={-6} width={40} src="https://avatar.iran.liara.run/public/boy?username=Theo" />
            <Avatar marginLeft={-6} width={40} src="https://avatar.iran.liara.run/public/boy?username=Paul" />
          </Container>
        </Container>
      </Container>
      <Container flexDirection="column" transformTranslateY={-40} overflow="hidden">
        <Container
          paddingTop={40}
          transformTranslateY={translateY}
          backgroundColor={colors.secondary}
          borderRadius={20}
          flexDirection="column"
        >
          <CardHeader>
            <CardTitle>
              <Text>Notifications</Text>
            </CardTitle>
            <CardDescription>
              <Text>You have 3 unread messages.</Text>
            </CardDescription>
          </CardHeader>
          <CardContent flexDirection="column" gap={16}>
            <Container flexDirection="row" alignItems="center" gap={16} borderRadius={6} borderWidth={1} padding={16}>
              <BellRing />
              <Container flexDirection="column" gap={4}>
                <Text fontSize={14} lineHeight="100%">
                  Push Notifications
                </Text>
                <Text fontSize={14} lineHeight={20} color={colors.mutedForeground}>
                  Send notifications to device.
                </Text>
              </Container>
              <Container flexGrow={1} />
              <Switch />
            </Container>
            <Container flexDirection="column">
              {notifications.map((notification, index) => (
                <Container
                  key={index}
                  marginBottom={index === notifications.length - 1 ? 0 : 16}
                  paddingBottom={index === notifications.length - 1 ? 0 : 16}
                  alignItems="flex-start"
                  flexDirection="row"
                  gap={17}
                >
                  <Container
                    height={8}
                    width={8}
                    transformTranslateY={4}
                    borderRadius={1000}
                    backgroundColor={colors.primary}
                  />
                  <Container gap={4} flexDirection="column">
                    <Text fontSize={14} lineHeight="100%">
                      {notification.title}
                    </Text>
                    <Text fontSize={14} lineHeight={20} color={colors.mutedForeground}>
                      {notification.description}
                    </Text>
                  </Container>
                </Container>
              ))}
            </Container>
          </CardContent>
          <CardFooter>
            <Button
              onClick={(e) => (e.stopPropagation(), (openRef.current = !openRef.current))}
              flexDirection="row"
              width="100%"
            >
              <Check marginRight={8} height={16} width={16} />
              <Text>Mark all as read</Text>
            </Button>
          </CardFooter>
        </Container>
      </Container>
    </Root>
  );
}
