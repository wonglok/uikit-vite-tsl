---
name: uikit-zustand-store
description: Holds uikit page state in zustand instead of useState — the store shapes used in this repo (plain value store, action store, module-level counter) and how to drive uikit props from them. Use when adding interactive state to a uikit page, when state must be read outside React (in useFrame), or when porting upstream's useState.
---

# State lives in zustand

This project's convention is **zustand for all React state** — upstream's `useState` calls were
converted (`DefaultExample.tsx:14-16`). Two reasons it earns its keep here beyond the rule:
uikit pages frequently need to *write* state from outside React (a `useFrame` tick, a pointer
callback in the vanilla API), and zustand's store is readable and writable from anywhere.

## Shape 1 — a plain value store

For a single scalar. No actions, mutate with `setState`.

```tsx
import { useFrame } from "@react-three/fiber";
import { create } from "zustand";

const useFrameCounter = create(() => 0);

function CountFrames() {
  useFrame(() => useFrameCounter.setState(useFrameCounter.getState() + 1));
  return null;
}

function FrameCounter() {
  const counter = useFrameCounter();                  // no selector: whole store
  return <div style={{ position: "absolute", top: 0, right: 0 }}>{counter}</div>;
}
```

Reading `getState()` and writing `setState()` inside `useFrame` is the point — no dependency
array, no re-render churn from the React tree.

## Shape 2 — state + actions

For anything with behaviour. Actions live in the store so components only dispatch.

```tsx
import { create } from "zustand";
import { getPreferredColorScheme, setPreferredColorScheme } from "../uikit-tsl-core/react";

type PreferredColorScheme = ReturnType<typeof getPreferredColorScheme>;

const useMenuStore = create<{
  pcs: PreferredColorScheme;
  cycleColorScheme: () => void;
}>()((set, get) => ({
  pcs: getPreferredColorScheme(),
  cycleColorScheme: () => {
    const { pcs } = get();
    setPreferredColorScheme(pcs === "light" ? "dark" : pcs === "dark" ? "system" : "light");
    set({ pcs: getPreferredColorScheme() });        // re-read: the source of truth is the module signal
  },
}));
```

## Shape 3 — store + side effect on init (URL sync)

`DefaultExample` keeps the selected demo in the URL *and* the store, with the store as the only
writer:

```tsx
const useDefaultExampleStore = create<{
  component: keyof typeof componentPages;
  setComponent: (value: keyof typeof componentPages) => void;
}>()((set) => ({
  component: readInitialComponent(),                 // lazy init from ?component=
  setComponent: (value) => {
    const params = new URLSearchParams(window.location.search);
    params.set("component", value);
    history.replaceState(null, "", "?" + params.toString());
    set({ component: value });
  },
}));
```

## Consuming it

Select narrowly so unrelated state does not re-render the tree:

```tsx
const component = useDefaultExampleStore((state) => state.component);
const setComponent = useDefaultExampleStore((state) => state.setComponent);
```

Then drive uikit components directly — the store value *is* the prop:

```tsx
<Tabs value={component} onValueChange={(value) => setComponent(value as any)}>
  <TabsList>…</TabsList>
  {Object.entries(componentPages).map(([name, Component]) => (
    <TabsContent value={name} key={name}><Component /></TabsContent>
  ))}
</Tabs>

<Progress value={useProgressDemoStore((state) => state.progress)} width={200} />
```

## Where zustand is *not* the right tool

Per-frame data that must update without React re-rendering — a colour sampled from the pointer,
a smoothed position — belongs in a **signal**, not a store. See
[[uikit-signals-reactive-props]]; mixing the two is how a "smooth" animation ends up stuttering.

See also: [[uikit-signals-reactive-props]], [[uikit-dialog-signal]].

Source: `AuthExample.tsx:154-179`, `MarketExample.tsx:302-312`, `DefaultExample.tsx:634-653`.
