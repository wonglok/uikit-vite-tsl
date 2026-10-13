/**
 * Port of upstream `examples/lucide`.
 *
 * Faithful to the source: a `Fullscreen` flex-wrap grid that renders every
 * other icon exported by the vendored lucide React kit inside a scroll
 * container.
 *
 * Notes on this port:
 *  - `overflow="scroll"` is kept for layout, but per-instance clipping is
 *    disabled in the TSL port, so the icon list overflows its box instead of
 *    being clipped/scrolled.
 *  - Nothing else was omitted (the upstream example uses no Portal or assets).
 */
import { UikitCanvas } from "./UikitCanvas";
import { Fullscreen } from "../uikit-tsl-core/react";
import * as Icons from "../uikit-tsl-core/kits/lucide/react";

export function LucideExample() {
  return (
    <UikitCanvas style={{ height: "100dvh", touchAction: "none" }}>
      <color attach="background" args={["black"]} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0} position={[5, 1, 10]} />
      <Fullscreen
        scrollbarColor="black"
        backgroundColor="white"
        flexDirection="row"
        flexWrap="wrap"
        overflow="scroll"
        gap={10}
        padding={10}
      >
        {Object.values(Icons as Record<string, (typeof Icons)["AArrowDown"]>)
          .filter((Icon, i) => i % 2 === 0)
          .map((Icon, i) => (
            <Icon key={i} />
          ))}
      </Fullscreen>
    </UikitCanvas>
  );
}
