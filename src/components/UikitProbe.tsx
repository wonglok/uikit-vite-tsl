/**
 * TEMPORARY INTEGRATION PROBE — not part of the library.
 *
 * Mounts the real uikit React stack (Container + Text) inside the WebGPU canvas
 * to exercise the whole port at once: flex/node setup, the instanced panel
 * material, and the MSDF glyph material. Delete once verified.
 */
import { Container, Text } from "../uikit-tsl-core/react";

export function UikitProbe() {
  return (
    <Container
      flexDirection="column"
      gap={8}
      padding={24}
      borderRadius={24}
      backgroundColor="#1d4ed8"
    >
      <Text fontSize={40} color="white">
        Hello TSL
      </Text>
      <Text fontSize={18} color="#bfdbfe">
        WebGPU + MSDF text
      </Text>
    </Container>
  );
}
