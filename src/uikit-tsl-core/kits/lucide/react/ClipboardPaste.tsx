
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ClipboardPasteIcon as VanillaClipboardPasteIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ClipboardPasteIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClipboardPasteIcon>
> = /*@__PURE__*/ build<VanillaClipboardPasteIcon, SvgProperties>(VanillaClipboardPasteIcon)
export const ClipboardPaste: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClipboardPasteIcon>
> = ClipboardPasteIcon
    