
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArmchairIcon as VanillaArmchairIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArmchairIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArmchairIcon>
> = /*@__PURE__*/ build<VanillaArmchairIcon, SvgProperties>(VanillaArmchairIcon, "VanillaArmchairIcon")
export const Armchair: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArmchairIcon>
> = ArmchairIcon
    