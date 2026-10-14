
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DiamondIcon as VanillaDiamondIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DiamondIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDiamondIcon>
> = /*@__PURE__*/ build<VanillaDiamondIcon, SvgProperties>(VanillaDiamondIcon, "VanillaDiamondIcon")
export const Diamond: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDiamondIcon>
> = DiamondIcon
    