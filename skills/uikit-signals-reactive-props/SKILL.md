---
name: uikit-signals-reactive-props
description: Drives uikit properties with preact signals so values update on the GPU without React re-rendering — signal/computed as prop values, readReactive, effect, and the relativeCenter sampling used for per-card animation. Use when animating a property every frame, when smoothing a value from the pointer, or when a React state update is too slow for an animation.
---

# Signals as property values

Almost every uikit property accepts a `ReadonlySignal` in place of a plain value. The signal is
read during the render tick, so changing it updates the panel **without re-rendering the React
tree**. This is the mechanism behind the colour-wave in `PerformanceExample` and the frame-time
slider in `VanillaExample`.

```tsx
import { computed, effect, signal } from "@preact/signals-core";
import { Container } from "../uikit-tsl-core/react";

// A signal is a valid backgroundColor.
const color = signal(new Color("#ffd166"));

<Container backgroundColor={color} borderRadius={6} />

// …and a computed is a valid width, derived from other signals.
<Container width={computed(() => color.value ? 40 : 60)} />
```

`colors.primary`, `borderRadius.md`, `withOpacity(colors.foreground, 0.3)` and
`basedOnPreferredColorScheme(...)` are all exactly this — signals built from the theme
(`kits/default/core/theme.ts`), which is why a theme change repaints without touching React.

## Reading a possibly-signal prop

Inside an event handler or any code outside the render, unwrap with `readReactive`:

```tsx
import { readReactive } from "../uikit-tsl-core/react";

<Container
  onPointerOver={(e) => readReactive(onPointerOver)?.(e)}   // onPointerOver may be a signal
  onPointerLeave={(e) => readReactive(onPointerLeave)?.(e)}
/>
```

## Animating without React

```tsx
const translateY = useMemo(() => signal(-460), []);

useFrame((_, delta) => {
  easing.damp(translateY, "value", openRef.current ? 0 : -460, 0.2, delta);
});

<Container transformTranslateY={translateY} />
```

`openRef` is a plain ref because the *signal* carries the value and the ref only says which
target to damp toward — no re-render per frame in either case.

## Sampling per-instance state — `relativeCenter`

A `VanillaContainer` exposes live signals for its own placement. `relativeCenter` is the
container's centre in its parent's space, updated as layout and scroll change. Reading it in an
`effect` gives a per-element, per-frame animation cheaply:

```tsx
import { effect, signal } from "@preact/signals-core";
import { useEffect, useMemo, useRef } from "react";
import { type VanillaContainer } from "../uikit-tsl-core/react";

function SampledCard({ item, width, height, surfaceWidth }: {
  item: Item; width: number; height: number; surfaceWidth: number;
}) {
  const color = useMemo(() => signal(new Color(item.hue)), [item.hue]);
  const ref = useRef<VanillaContainer>(null);

  useEffect(() => {
    const internals = ref.current;
    if (internals == null) return;
    return effect(() => {                          // returns a disposer — return it from the effect
      const center = internals.relativeCenter.value;
      if (center == null) return;
      const wave = (Math.sin((center[0] / surfaceWidth) * Math.PI * 4) + 1) * 0.5;
      color.value = new Color().setHSL((wave + item.id * 0.0007) % 1, 0.68, 0.62);
    });
  }, [color, item.id, surfaceWidth]);

  return <Container ref={ref} backgroundColor={color} width={width} height={height} />;
}
```

`effect` returns its own unsubscribe; returning it from `useEffect` is what stops the
subscription leaking when the card unmounts. With 6 144 sampled cards this is one signal per
card and no React work — the load mode exists to prove exactly that.

## Combining signals — the Highlighter

`computed` chains build a transform out of another container's live matrix. This is how the
dashboard's red outline follows whatever the pointer is over:

```tsx
const transformation = computed(() => {
  const { value } = e.object.globalMatrix;
  if (value == null) return { translation: new Vector3(), scale: new Vector3(), rotation: new Euler() };
  const baseMatrix = internalRef.current?.globalMatrix.value;
  if (baseMatrix != null) matrixHelper.copy(baseMatrix).invert(); else matrixHelper.identity();
  matrixHelper.multiply(value);
  const translation = new Vector3(), scale = new Vector3();
  matrixHelper.decompose(translation, quaternionHelper, scale);
  return { translation, scale, rotation: new Euler().setFromQuaternion(quaternionHelper) };
});

<Container
  ref={highlightRef}
  transformTranslateX={computed(() => transformation.value.translation.x / Number(properties.value.pixelSize) - 0.5 * width.value)}
  width={computed(() => transformation.value.scale.x * (size.value?.[0] ?? 0))}
/>
```

Reuse one `Matrix4`/`Quaternion`/`Vector3` per module as the scratch helpers do — the dashboards
allocate nothing per event.

## Signals or zustand?

| | signal / computed | zustand |
|---|---|---|
| Per-frame value (animation, sampled colour) | ✓ | ✗ re-renders |
| Read/written outside React | ✓ | ✓ |
| UI state a component branches on (open, tab) | possible | ✓ preferred here |

The project rule is zustand for React state ([[uikit-zustand-store]]); signals are for values
that must not cause a React render.

Source: `PerformanceExample.tsx:364-417`, `DashboardExample.tsx:593-682`,
`VanillaExample.tsx:468-478`.
