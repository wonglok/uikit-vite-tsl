
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ClipboardPlusIcon as VanillaClipboardPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ClipboardPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClipboardPlusIcon>
> = /*@__PURE__*/ build<VanillaClipboardPlusIcon, SvgProperties>(VanillaClipboardPlusIcon, "VanillaClipboardPlusIcon")
export const ClipboardPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClipboardPlusIcon>
> = ClipboardPlusIcon
    