
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ClipboardTypeIcon as VanillaClipboardTypeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ClipboardTypeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClipboardTypeIcon>
> = /*@__PURE__*/ build<VanillaClipboardTypeIcon, SvgProperties>(VanillaClipboardTypeIcon, "VanillaClipboardTypeIcon")
export const ClipboardType: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClipboardTypeIcon>
> = ClipboardTypeIcon
    