
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ClipboardXIcon as VanillaClipboardXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ClipboardXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClipboardXIcon>
> = /*@__PURE__*/ build<VanillaClipboardXIcon, SvgProperties>(VanillaClipboardXIcon)
export const ClipboardX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClipboardXIcon>
> = ClipboardXIcon
    