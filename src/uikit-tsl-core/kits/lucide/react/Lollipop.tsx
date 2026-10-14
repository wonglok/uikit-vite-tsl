
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LollipopIcon as VanillaLollipopIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LollipopIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLollipopIcon>
> = /*@__PURE__*/ build<VanillaLollipopIcon, SvgProperties>(VanillaLollipopIcon, "VanillaLollipopIcon")
export const Lollipop: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLollipopIcon>
> = LollipopIcon
    