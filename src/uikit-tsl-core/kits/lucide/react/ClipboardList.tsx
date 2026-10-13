
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ClipboardListIcon as VanillaClipboardListIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ClipboardListIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClipboardListIcon>
> = /*@__PURE__*/ build<VanillaClipboardListIcon, SvgProperties>(VanillaClipboardListIcon)
export const ClipboardList: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClipboardListIcon>
> = ClipboardListIcon
    