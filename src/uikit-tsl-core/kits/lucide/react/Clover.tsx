
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CloverIcon as VanillaCloverIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CloverIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloverIcon>
> = /*@__PURE__*/ build<VanillaCloverIcon, SvgProperties>(VanillaCloverIcon)
export const Clover: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloverIcon>
> = CloverIcon
    