---
name: uikit-horizon-panel-material
description: The horizon kit's Panel and its fixed gradient material — why backgroundColor and borderColor do nothing on it, and when to use a bordered Container instead. Use when a horizon Panel ignores its colours, when a page built with the horizon kit looks wrong, or when deciding between Panel and Container.
---

# Horizon's `Panel` paints a fixed gradient

`Panel` from `kits/horizon/react` is a panel with its own material, not a themed container. That
material paints a **fixed white → `#f2f2f2` gradient** and **ignores `backgroundColor` and
`borderColor`**. Setting them looks like it worked — the props validate, nothing throws — and
changes nothing on screen.

`HorizonExample` states this up front and works around it: the card surfaces in that page are
bordered `Container`s, and the backdrop is a grey page colour so white surfaces read as raised.

```tsx
// A white page backdrop makes the white gradient surfaces look like raised cards.
<UikitCanvas events={noEvents}>
  <PointerEvents />
  <color attach="background" args={["#e4e4e7"]} />

  <Fullscreen color="black" dark={{ color: "white" }} flexDirection="column" alignItems="center"
              padding={32} gap={32}>
    {/* Card surface: a bordered Container, NOT a Panel. */}
    <Container flexDirection="row" backgroundColor="#ffffff" borderWidth={1} borderColor="#a1a1aa" borderRadius={16} />

    {/* Panel is fine for a chrome bar where the gradient is the intended look. */}
    <Panel padding={8} flexDirection="row" gap={12} alignItems="center">
      <Text backgroundColor="black" color="white" padding={8} borderRadius={12}>npm install …</Text>
      <Button onClick={() => navigator.clipboard.writeText(installCommand)}>
        <Text>Copy</Text>
      </Button>
    </Panel>
  </Fullscreen>
</UikitCanvas>
```

## When to use which

| Want | Use |
|---|---|
| The horizon gradient surface | `Panel` |
| A specific background / border colour | `Container` + `borderWidth` / `borderColor` / `borderRadius` |
| A themed shadcn-style card | `Card` from the **default** kit, not horizon |

## Writing text and icons inside horizon components

Horizon's components expect their own composition wrappers — text goes inside `ButtonLabel`,
icons inside `ButtonIcon`:

```tsx
import { Button, ButtonIcon, ButtonLabel, ButtonLabelSubtext } from "../uikit-tsl-core/kits/horizon/react";
import { GithubIcon } from "../uikit-tsl-core/kits/lucide/react";

<Button>
  <ButtonIcon>
    <GithubIcon />
  </ButtonIcon>
  <ButtonLabel>
    <Text>Label</Text>
    <ButtonLabelSubtext>
      <Text>Subtext</Text>
    </ButtonLabelSubtext>
  </ButtonLabel>
</Button>
```

Dropping the wrappers lays the text out as a bare child of the button and loses the component's
internal spacing.

## Kit surface

`kits/horizon/react` exports: `Avatar`, `Badge`, `Button` (+ `ButtonIcon`, `ButtonLabel`,
`ButtonLabelSubtext`), `Checkbox`, `Divider`, `Dropdown` (+ `DropdownAvatar`, `DropdownButton`,
`DropdownIcon`, `DropdownList`, `DropdownListItem`, `DropdownTextValue`), `IconIndicator`,
`Input`, `InputField`, `Panel`, `ProgressBar` (+ `ProgressBarStepper`,
`ProgressBarStepperStep`), `RadioGroup` (+ `RadioGroupItem`), `Slider`, `Toggle`.

Most of these take a plain string prop rather than children where the default kit takes
children — `Badge label="Badge"`, `InputField label="HelperText"
placeholder="Enter something"` — so check before copying default-kit markup across.

See also: [[uikit-container-flex-layout]], [[uikit-theming-color-scheme]], [[uikit-lucide-icons]].

Source: `src/examples-pages/HorizonExample.tsx:276-361`, `VanillaExample.tsx:146-168`.
