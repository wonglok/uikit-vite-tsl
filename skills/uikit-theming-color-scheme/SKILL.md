---
name: uikit-theming-color-scheme
description: Themes and light/dark mode for the default kit — setPreferredColorScheme, the dark={{}} conditional, the theme signal and setTheme, colors signals, defaults, and per-page overrides. Use when a page must render light or dark, when colours are not following the theme, or when adding a theme switcher.
---

# Theme and colour scheme

Two independent knobs:

- **Preferred colour scheme** — `light` | `dark` | `system`. Picks which half of the theme is
  read. This is the one that matters day to day.
- **Theme object** — the palette itself. Swap it to restyle the whole default kit.

## Colour scheme

```tsx
import { setPreferredColorScheme, getPreferredColorScheme, isDarkMode } from "../uikit-tsl-core/react";

setPreferredColorScheme("light");     // the demo pages pin this at module scope
setPreferredColorScheme("dark");
setPreferredColorScheme("system");    // follow prefers-color-scheme

getPreferredColorScheme()             // 'light' | 'dark' | 'system'  (peek, non-reactive)
isDarkMode                            // ReadonlySignal<boolean> — the resolved answer
```

`"system"` tracks a live `matchMedia('(prefers-color-scheme: dark)')` listener
(`preferred-color-scheme.ts:5-13`), so it keeps up if the OS flips while the page is open.

### Overriding one component regardless of scheme

The `dark` conditional applies its properties only while dark mode is on:

```tsx
<Container backgroundColor={0xffffff} dark={{ backgroundColor: 0x0 }} />
<Text color="black" dark={{ color: "white" }} />
<Fullscreen backgroundColor={0xffffff} dark={{ backgroundColor: 0x0 }} />
```

Pair it with the light value on the component itself — `dark={{…}}` is a layer *on top of* the
base value, not a replacement for choosing one.

### A cycle-in-place switcher

```tsx
const useMenuStore = create<{ pcs: PreferredColorScheme; cycleColorScheme: () => void }>()((set, get) => ({
  pcs: getPreferredColorScheme(),
  cycleColorScheme: () => {
    const { pcs } = get();
    setPreferredColorScheme(pcs === "light" ? "dark" : pcs === "dark" ? "system" : "light");
    set({ pcs: getPreferredColorScheme() });      // store mirrors the module signal
  },
}));

<Button size="icon" variant="ghost" onClick={cycleColorScheme}>
  {pcs === "dark" ? <Moon /> : pcs === "system" ? <SunMoon /> : <Sun />}
</Button>
```

Note the store re-reads `getPreferredColorScheme()` rather than deriving the next value itself:
the module signal is the source of truth, and `getPreferredColorScheme` is a `peek` (non-reactive)
so it is safe to call anywhere.

## Theme palette

`theme` is a signal holding the active palette; `setTheme` swaps it.

```tsx
import { Color } from "three";
import { theme, setTheme, defaultThemes, colors, defaults, borderRadius } from "../uikit-tsl-core/kits/default/react";

theme.value                                    // current palette
setTheme(defaultThemes.red)                    // built-ins: .default and .red
setTheme({ ...defaultThemes.default, primary: new Color("#2d6cdf") })
```

### Reading the palette

`colors.*` are **signals**, computed from `theme` and the current colour scheme — pass them
straight into a prop or a `computed`:

```tsx
<Text color={colors.mutedForeground}>Secondary copy</Text>
<Container backgroundColor={colors.primary} borderRadius={borderRadius.md} />
```

Every key of the theme except `radius`/`dark` becomes a colour: `background`, `foreground`,
`card`, `cardForeground`, `popover`, `primary`, `primaryForeground`, `secondary`,
`muted`, `mutedForeground`, `accent`, `destructive`, `destructiveForeground`, `border`,
`input`, `ring`.

`borderRadius.md` / `.sm` / `.lg` derive from the theme's `radius` (8, 6, 4 by default).

### `defaults` — the kit's shared baseline

Spread it to adopt the kit's defaults wholesale (scrollbar, line height, border and text
colour) on a container:

```tsx
import { defaults } from "../uikit-tsl-core/kits/default/react";

<Container height="100%" flexDirection="column" {...defaults}>
```

### One-off opacity

`withOpacity` returns a signal, so it tracks the theme:

```tsx
import { withOpacity } from "../uikit-tsl-core/react";
import { colors } from "../uikit-tsl-core/kits/default/react";

<Container borderColor={withOpacity(colors.foreground, 0.2)} />
```

### Deriving a value from the scheme

```tsx
import { basedOnPreferredColorScheme } from "../uikit-tsl-core/react";

const surface = basedOnPreferredColorScheme({
  light: { backgroundColor: 0xffffff },
  dark: { backgroundColor: 0x18181b },
});
```

See also: [[uikit-responsive-props]], [[uikit-zustand-store]].

Source: `src/uikit-tsl-core/preferred-color-scheme.ts`, `kits/default/core/theme.ts:62-431`.
