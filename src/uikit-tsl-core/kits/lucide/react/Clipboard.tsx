
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ClipboardIcon as VanillaClipboardIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ClipboardIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClipboardIcon>
> = /*@__PURE__*/ build<VanillaClipboardIcon, SvgProperties>(VanillaClipboardIcon)
export const Clipboard: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClipboardIcon>
> = ClipboardIcon
    