---
name: uikit-responsive-props
description: Conditionally applied property layers in uikit — the sm/md/lg/xl/2xl breakpoints, dark, hover/active/focus/placeholderStyle, important, and the "*" descendant selector. Use when a layout must change with panel width, when styling every child at once, or when a conditional prop seems to be ignored.
---

# Conditional property layers

Any uikit component accepts nested objects keyed by a **condition**. Each nested object holds
the same properties as the component and applies only while its condition holds.

```tsx
<Container
  width="100%"
  sm={{ width: 350 }}                             // ≥ sm
  lg={{ padding: 40, maxWidth: 10000 }}
  dark={{ borderRightWidth: 1 }}
  hover={{ backgroundColor: 0xecfeff }}
>
  <Button variant="ghost" positionType="absolute" positionRight={16} positionTop={16}
          md={{ positionRight: 32, positionTop: 32 }}>
    <Text>Login</Text>
  </Button>
</Container>
```

## The available conditions

| Key | Applies when |
|---|---|
| `sm` `md` `lg` `xl` `2xl` | root component width is greater than 640 / 768 / 1024 / 1280 / 1536 px |
| `dark` | dark mode is active |
| `hover` | pointer is over this component |
| `active` | pointer is down on it |
| `focus` | it has keyboard focus |
| `placeholderStyle` | the component is showing placeholder text |
| `important` | always — the unconditional override layer |

All of these are defined in `src/uikit-tsl-core/properties/conditional.ts:9-11` (breakpoints) and
listed as layer sections in `properties/layer.ts:24-37`.

## The breakpoints measure the root, not the viewport

```ts
conditionals.sm = () => root.value.component.size.value?.[0] > 640
```

They read the **root component's width in px** (`conditional.ts:24-30`) — the `Root`/`Fullscreen`
box, not `window.innerWidth`, not the immediate parent. Two consequences:

- A layout that switches at `lg` switches when *the UI* is wide, which is what you want when the
  UI is a panel rather than a page.
- Nesting inside a narrow panel does **not** change which branch is active; only the root's size
  does. So don't reach for `sm`/`lg` to make a component adapt to its own container.

## `"*"` — style descendants in one place

`*` applies its properties to the component **and every descendant**, which is the clean way to
set a shared rhythm or ink without repeating yourself:

```tsx
// Every text inside the sidebar becomes white.
<Container backgroundColor={0x18181b} {...{ "*": { color: "white" } }} />

// Every label in this row is 14/20.
<Container flexDirection="row" height={20} alignItems="center" gap={16}
           {...{ "*": { fontSize: 14, lineHeight: "20px" } }}>
  <Text>Blog</Text>
  <Separator orientation="vertical" />
  <Text>Docs</Text>
</Container>

// A whole page gets one base font size.
<Fullscreen {...{ "*": { fontSize: 14 } }} />
```

The spread braces are required: `{"*": …}` is not a valid JSX prop name, so it goes through
`{...{ "*": value }}`. `*` is inherited (schema: `properties/schema.ts:154`), so a nested
descendant value overrides an outer `*`.

## `important`

`important` takes no condition — it is the "whatever the layers say, this wins" escape hatch:

```tsx
<Text important={{ color: "red" }} />
```

## Class-based styling

Alongside the object props there is a `classList` prop (`ClassListProperties`) taking
`Array<string | InProperties>`, backed by `StyleSheet` / `ClassList` in
`src/uikit-tsl-core/components/classes.ts`. The condition-key objects above cover the common
cases; reach for `classList` when the same bundle of properties is reused across many
components.

See also: [[uikit-theming-color-scheme]], [[uikit-hover-and-cursor]], [[uikit-container-flex-layout]].

Source: `AuthExample.tsx:70-91`, `DefaultExample.tsx:428-440`, `PerformanceExample.tsx:88`.
