
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DiamondMinusIcon as VanillaDiamondMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DiamondMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDiamondMinusIcon>
> = /*@__PURE__*/ build<VanillaDiamondMinusIcon, SvgProperties>(VanillaDiamondMinusIcon, "VanillaDiamondMinusIcon")
export const DiamondMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDiamondMinusIcon>
> = DiamondMinusIcon
    