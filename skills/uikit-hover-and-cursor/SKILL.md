---
name: uikit-hover-and-cursor
description: Interactive affordances on panels — the hover prop, cursor="pointer", onClick with stopPropagation, pointerEvents="none" on decorative children, and the typed pointer event. Use when adding hover styling, making a row or card clickable, or when a click also triggers an ancestor's handler.
---

# Hover, cursor and clicks

## Hover

`hover` takes the same property shape as the component itself, and is applied while the pointer
is over the panel. It composes with the base value — set the base too, or the property snaps
back to unset on leave.

```tsx
<Container
  backgroundColor={index % 2 === 0 ? 0xffffff : 0xf9fafb}
  borderColor={0xe4e7ec}
  borderWidth={1}
  hover={{ backgroundColor: 0xecfeff, borderColor: 0x06b6d4 }}
  flexDirection="row"
/>
```

Both branches are usually needed when the base colour is itself conditional, so compute them
from one expression:

```tsx
const selected = value === item.id;

<Container
  backgroundColor={selected ? "#172033" : "#e8edf2"}
  hover={{ backgroundColor: selected ? "#172033" : "#d9e1ea" }}
  onClick={() => onChange(item.id)}
/>
```

## Cursor

```tsx
<Container cursor="pointer" onClick={toggle}>…</Container>
```

Set it on the element that owns the click, not on an ancestor — the cursor comes from whichever
panel the pointer is actually over.

## Clicks

```tsx
<Container
  onClick={(e) => (
    e.stopPropagation(),            // inner-most handler wins
    (openRef.current = !openRef.current)
  )}
  cursor="pointer"
/>
```

`e.stopPropagation()` matters as soon as a clickable element sits inside another clickable one —
the card's button lives inside the card's own `onClick`, and without the stop both toggle and
cancel out.

The event is `@pmndrs/pointer-events`' `PointerEvent`, not a DOM one:

```tsx
<Button
  onClick={(e) => {
    // e has the correct types as specified in types/three-augmented.d.ts
    console.log(e.pointerId);
  }}
/>
```

## Keep decoration out of the way

A child that should never be a hit target — a label inside a card that itself handles hover —
should opt out explicitly, so the hover does not flicker as the pointer crosses glyphs:

```tsx
<Container hover={{ backgroundColor: "#ffffff", borderColor: "#172033" }}>
  <Text pointerEvents="none">{item.id}</Text>
  <Text pointerEvents="none">{item.value}%</Text>
</Container>
```

Hover and click only fire at all when the spherecast event manager is mounted —
see [[uikit-pointer-events]].

Source: `VanillaExample.tsx:217`, `PerformanceExample.tsx:178-216`, `CardExample.tsx:156-163`,
`DashboardExample.tsx:235-238`.
