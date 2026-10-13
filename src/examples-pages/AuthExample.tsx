/**
 * Port of upstream `examples/auth`. Faithful: nothing is omitted — the only assets are
 * inline `<Svg>` markup (the Acme mark and the GitHub logo). `UserAuthForm` is inlined
 * from `examples/auth/src/components/user-auth-form.tsx`.
 *
 * Per-instance clipping is disabled in this port, so the `overflow="hidden"` marketing
 * column does not actually clip; layout is otherwise unchanged.
 */
import { useFrame } from "@react-three/fiber";
import {
  Container,
  Fullscreen,
  Text,
  Svg,
  canvasInputProps,
  setPreferredColorScheme,
} from "../uikit-tsl-core/react";
import { Button, colors, Input } from "../uikit-tsl-core/kits/default/react";
import { create } from "zustand";
import { noEvents, PointerEvents } from "@react-three/xr/dist/events.js";
import { UikitCanvas } from "./UikitCanvas";

setPreferredColorScheme("light");

export function UserAuthForm(props: React.ComponentPropsWithoutRef<typeof Container>) {
  return (
    <Container flexDirection="column" gap={24} {...props}>
      <Container flexDirection="column" gap={8}>
        <Container flexDirection="column" gap={4}>
          <Input autocomplete="email" placeholder="name@example.com" />
          <Input autocomplete="current-password" type="password" placeholder="password" />
        </Container>
        <Button>
          <Text>Sign In with Email</Text>
        </Button>
      </Container>
      <Container flexDirection="column" positionType="relative">
        <Container positionType="absolute" inset={0} alignItems="center" flexDirection="row">
          <Container width="100%" borderTopWidth={1} />
        </Container>
        <Container positionType="relative" flexDirection="row" justifyContent="center">
          <Text
            backgroundColor={colors.background}
            zIndex={1}
            paddingX={8}
            color={colors.mutedForeground}
            fontSize={14}
            lineHeight="143%"
          >
            OR CONTINUE WITH
          </Text>
        </Container>
      </Container>
      <Button variant="outline">
        <Svg
          marginRight={8}
          width={16}
          height={16}
          content={`<svg viewBox="0 0 98 96" width="98" height="96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f"/></svg>`}
        />
        <Text>GitHub</Text>
      </Button>
    </Container>
  );
}

function AuthenticationPage() {
  return (
    <Container width="100%" height="100%" positionType="relative" flexDirection="row" alignItems="center">
      <Button
        variant="ghost"
        positionType="absolute"
        positionRight={16}
        positionTop={16}
        md={{ positionRight: 32, positionTop: 32 }}
      >
        <Text>Login</Text>
      </Button>
      <Container
        positionType="relative"
        flexGrow={1}
        flexBasis={0}
        maxWidth={0}
        overflow="hidden"
        height="100%"
        flexDirection="column"
        dark={{ borderRightWidth: 1 }}
        padding={0}
        lg={{ padding: 40, maxWidth: 10000 }}
        backgroundColor={0x18181b}
        {...{ "*": { color: "white" } }}
      >
        <Container flexDirection="row" alignItems="center">
          <Svg
            content={`<svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>`}
            width={24}
            height={24}
            marginRight={8}
          />

          <Text fontSize={18} lineHeight="28px" fontWeight="medium">
            Acme Inc
          </Text>
        </Container>
        <Container flexDirection="column" marginTop="auto">
          <Container flexDirection="column" gap={8}>
            <Text fontSize={18} lineHeight="28px">
              "Culpa eiusmod ut ipsum sunt velit labore minim eu. Occaecat magna mollit aliqua cupidatat."
            </Text>
            <Text fontSize={14} lineHeight="20px">
              Max Mustermann
            </Text>
          </Container>
        </Container>
      </Container>
      <Container flexDirection="column" flexBasis={0} flexGrow={1} padding={16} lg={{ padding: 32 }}>
        <Container
          flexDirection="column"
          marginX="auto"
          width="100%"
          justifyContent="center"
          gap={24}
          sm={{ width: 350 }}
        >
          <Container alignItems="center" flexDirection="column" gap={8} {...{ "*": { textAlign: "center" } }}>
            <Text fontSize={24} lineHeight="32px" fontWeight="semi-bold" letterSpacing={-0.4}>
              Create an account
            </Text>
            <Text fontSize={14} lineHeight="20px" color={colors.mutedForeground}>
              Enter your email below to create your account
            </Text>
          </Container>
          <UserAuthForm />
          <Text paddingX={32} textAlign="center" fontSize={14} lineHeight="20px" color={colors.mutedForeground}>
            By clicking continue, you agree to our Terms of Service and Privacy Policy.
          </Text>
        </Container>
      </Container>
    </Container>
  );
}

const useFrameCounter = create(() => 0);

function CountFrames() {
  useFrame(() => useFrameCounter.setState(useFrameCounter.getState() + 1));
  return null;
}

function FrameCounter() {
  const counter = useFrameCounter();
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: "black",
        fontSize: "2rem",
        padding: "0.5rem 1rem",
        color: "white",
        fontFamily: "sans-serif",
        zIndex: 100,
      }}
    >
      {counter}
    </div>
  );
}

export function AuthExample() {
  return (
    <>
      <FrameCounter />
      <UikitCanvas
        flat
        frameloop="demand"
        camera={{ position: [0, 0, 18], fov: 35 }}
        style={{ height: "100dvh", touchAction: "none" }}
        gl={{ localClippingEnabled: true }}
        events={noEvents}
        {...canvasInputProps}
      >
        <CountFrames />
        <PointerEvents />
        <Fullscreen backgroundColor={colors.background}>
          <AuthenticationPage />
        </Fullscreen>
      </UikitCanvas>
    </>
  );
}
