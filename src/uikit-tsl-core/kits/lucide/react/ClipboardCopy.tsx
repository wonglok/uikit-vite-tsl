
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ClipboardCopyIcon as VanillaClipboardCopyIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ClipboardCopyIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClipboardCopyIcon>
> = /*@__PURE__*/ build<VanillaClipboardCopyIcon, SvgProperties>(VanillaClipboardCopyIcon, "VanillaClipboardCopyIcon")
export const ClipboardCopy: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClipboardCopyIcon>
> = ClipboardCopyIcon
    