---
name: uikit-text-line-height
description: Explains uikit's lineHeight units — a bare number is a MULTIPLIER of fontSize, a string with px is absolute. Use when text rows look far too tall, when a panel is double the height you expect, or when porting upstream markup that writes lineHeight={20}.
---

# `lineHeight`: bare number = multiplier

```
lineHeight={20}       → 20 × fontSize.  With fontSize 14 that is a 280px line box.
lineHeight="20px"     → 20px, absolutely.
lineHeight="100%"     → 1 × fontSize.  The usual "tight heading" value.
lineHeight="150%"     → the theme default (from `defaults` in the default kit).
```

This is upstream's documented rule (`docs/migration/from-version-0.md`), and the port renders
the bare number faithfully — it does **not** guess that you meant px.

## The bug this rule causes

`examples/card/src/App.tsx` writes the bare `20` on two muted description lines. Each got a
280-unit line box, which stretched the notification rows and the whole slide-up panel to
roughly twice its intended height. Because the panel is only translated up by 460 units when
closed, it could no longer hide behind the card, and the header and rows that should have been
off-screen showed as a clipped grey sliver below the card — reading as *missing text*.

The fix is one character of intent:

```tsx
// ✗ from upstream, doubled the whole panel height
<Text fontSize={14} lineHeight={20} color={colors.mutedForeground}>
  Send notifications to device.
</Text>

// ✓ what upstream's own card docs use
<Text fontSize={14} lineHeight="20px" color={colors.mutedForeground}>
  Send notifications to device.
</Text>
```

## Conventions worth copying

```tsx
<Text fontSize={24} lineHeight="100%">Heading</Text>      {/* tight, no extra leading */}
<Text fontSize={14} lineHeight="20px">Body copy</Text>    {/* shadcn's body rhythm */}
<Text fontSize={12} lineHeight="16px">Caption</Text>      {/* shadcn's caption rhythm */}
<Text>Relies on defaults</Text>                           {/* theme lineHeight 150% */}
```

When porting a shadcn-derived kit, `"Npx"` on body text and `"100%"` on headings reproduce the
original spacing; bare numbers almost never do.

See also: [[uikit-text-and-typography]], [[uikit-container-flex-layout]].

Source: `src/examples-pages/CardExample.tsx:36-48`.
