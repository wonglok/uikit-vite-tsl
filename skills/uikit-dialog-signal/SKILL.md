---
name: uikit-dialog-signal
description: Opens and closes kit dialogs and alert dialogs — the imperative signal-backed DialogTrigger, and the controlled open/onOpenChange form. Use when a dialog will not open, when wiring a trigger to a dialog, when you need the dialog controlled by zustand state, or when a dialog renders behind other UI.
---

# Dialogs

A dialog is two halves that must be connected: a `Dialog` (the content) and a `DialogTrigger`
(the button). The kit gives you two ways to connect them.

## Imperative — a signal holds the dialog

`DialogTrigger` takes the target dialog through a `dialog` prop. A preact `signal` is the
idiomatic holder: the trigger reads it, the dialog writes it.

```tsx
import { useMemo } from "react";
import { signal } from "@preact/signals-core";
import { Button, Dialog, DialogContent, DialogDescription, DialogFooter,
         DialogHeader, DialogTitle, DialogTrigger, type VanillaDialog } from "../uikit-tsl-core/kits/default/react";
import { Container, Text } from "../uikit-tsl-core/react";

export function DialogDemo() {
  const ref = useMemo(() => signal<VanillaDialog | undefined>(undefined), []);

  return (
    <>
      <DialogTrigger dialog={ref}>
        <Button variant="outline">
          <Text>Edit Profile</Text>
        </Button>
      </DialogTrigger>

      <Dialog ref={(dialog) => void (ref.value = dialog ?? undefined)}>
        <DialogContent sm={{ maxWidth: 425 }}>
          <DialogHeader>
            <DialogTitle><Text>Edit profile</Text></DialogTitle>
            <DialogDescription>
              <Text>Make changes to your profile here.</Text>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button><Text>Save changes</Text></Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
```

The `dialog ?? undefined` coercion in the ref callback is deliberate: React passes `null` on
unmount, the prop wants `undefined`. `DashboardExample` wraps that in a one-line component
(`DialogTriggerWrapper`) rather than repeating it.

`AlertDialog` is the same shape with different parts: `AlertDialogTrigger`,
`AlertDialogContent`, `…Header`, `…Title`, `…Description`, `…Footer`, `AlertDialogCancel`,
`AlertDialogAction`.

## Controlled — state owns `open`

Reach for this when something other than the trigger opens the dialog (a nav item, a store, a
condition). `open` / `onOpenChange` are the controlled pair, and the store can hold `open`.

```tsx
const [open, setOpen] = useState(false);                    // or a zustand store
const [dialog, setDialog] = useState<VanillaDialog | null>(null);

<Dialog
  renderOrder={1}                 // keep it above the rest of the UI
  depthTest={false}               // …and never z-tested against it
  ref={(ref) => setDialog(ref)}
  open={open}
  onOpenChange={setOpen}
>
  <DialogContent positionType="relative" sm={{ maxWidth: 425 }}>
    …
    <DialogFooter>
      <Button onClick={() => setOpen(false)}><Text>Save changes</Text></Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

The trigger still needs the dialog even in controlled mode — pass the state-held one:

```tsx
<DialogTrigger dialog={dialog ?? undefined}>
  <Avatar cursor="pointer" src={avatarPath("Alicia")} height={32} width={32} />
</DialogTrigger>
```

## Notes

- Put the `Dialog` inside the `Fullscreen` (or `Root`) that should contain its overlay, as
  `DashboardExample` does — it positions relative to that subtree.
- `renderOrder={1}` + `depthTest={false}` is what stops the dialog being occluded by panels
  drawn later; both matter together.
- `positionType="relative"` on `DialogContent` keeps the content box in the overlay's flow
  rather than against the panel edge.
- Nothing opens at all without [[uikit-pointer-events]].

See also: [[uikit-signals-reactive-props]], [[uikit-zustand-store]].

Source: `DefaultExample.tsx:163-197`, `DashboardExample.tsx:112-168`, `:474-494`.
