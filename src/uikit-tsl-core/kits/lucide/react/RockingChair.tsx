
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RockingChairIcon as VanillaRockingChairIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RockingChairIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRockingChairIcon>
> = /*@__PURE__*/ build<VanillaRockingChairIcon, SvgProperties>(VanillaRockingChairIcon)
export const RockingChair: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRockingChairIcon>
> = RockingChairIcon
    