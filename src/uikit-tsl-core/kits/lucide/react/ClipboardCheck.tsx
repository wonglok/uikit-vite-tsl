
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ClipboardCheckIcon as VanillaClipboardCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ClipboardCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClipboardCheckIcon>
> = /*@__PURE__*/ build<VanillaClipboardCheckIcon, SvgProperties>(VanillaClipboardCheckIcon, "VanillaClipboardCheckIcon")
export const ClipboardCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClipboardCheckIcon>
> = ClipboardCheckIcon
    