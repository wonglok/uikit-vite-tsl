
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ClipboardMinusIcon as VanillaClipboardMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ClipboardMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClipboardMinusIcon>
> = /*@__PURE__*/ build<VanillaClipboardMinusIcon, SvgProperties>(VanillaClipboardMinusIcon)
export const ClipboardMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClipboardMinusIcon>
> = ClipboardMinusIcon
    