
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { EggFriedIcon as VanillaEggFriedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const EggFriedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEggFriedIcon>
> = /*@__PURE__*/ build<VanillaEggFriedIcon, SvgProperties>(VanillaEggFriedIcon, "VanillaEggFriedIcon")
export const EggFried: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEggFriedIcon>
> = EggFriedIcon
    