
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { IceCreamConeIcon as VanillaIceCreamConeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const IceCreamConeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaIceCreamConeIcon>
> = /*@__PURE__*/ build<VanillaIceCreamConeIcon, SvgProperties>(VanillaIceCreamConeIcon)
export const IceCreamCone: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaIceCreamConeIcon>
> = IceCreamConeIcon
    