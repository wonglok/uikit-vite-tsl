
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DiamondPercentIcon as VanillaDiamondPercentIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DiamondPercentIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDiamondPercentIcon>
> = /*@__PURE__*/ build<VanillaDiamondPercentIcon, SvgProperties>(VanillaDiamondPercentIcon)
export const DiamondPercent: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDiamondPercentIcon>
> = DiamondPercentIcon
    