
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DiamondPlusIcon as VanillaDiamondPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DiamondPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDiamondPlusIcon>
> = /*@__PURE__*/ build<VanillaDiamondPlusIcon, SvgProperties>(VanillaDiamondPlusIcon, "VanillaDiamondPlusIcon")
export const DiamondPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDiamondPlusIcon>
> = DiamondPlusIcon
    