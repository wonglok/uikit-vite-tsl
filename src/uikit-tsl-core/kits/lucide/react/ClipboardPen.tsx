
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ClipboardPenIcon as VanillaClipboardPenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ClipboardPenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClipboardPenIcon>
> = /*@__PURE__*/ build<VanillaClipboardPenIcon, SvgProperties>(VanillaClipboardPenIcon, "VanillaClipboardPenIcon")
export const ClipboardPen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClipboardPenIcon>
> = ClipboardPenIcon
    