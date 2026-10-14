
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { EggOffIcon as VanillaEggOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const EggOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEggOffIcon>
> = /*@__PURE__*/ build<VanillaEggOffIcon, SvgProperties>(VanillaEggOffIcon, "VanillaEggOffIcon")
export const EggOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEggOffIcon>
> = EggOffIcon
    