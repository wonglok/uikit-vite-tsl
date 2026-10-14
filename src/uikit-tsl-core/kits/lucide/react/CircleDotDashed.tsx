
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleDotDashedIcon as VanillaCircleDotDashedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleDotDashedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleDotDashedIcon>
> = /*@__PURE__*/ build<VanillaCircleDotDashedIcon, SvgProperties>(VanillaCircleDotDashedIcon, "VanillaCircleDotDashedIcon")
export const CircleDotDashed: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleDotDashedIcon>
> = CircleDotDashedIcon
    