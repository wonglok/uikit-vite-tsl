
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CirclePowerIcon as VanillaCirclePowerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CirclePowerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCirclePowerIcon>
> = /*@__PURE__*/ build<VanillaCirclePowerIcon, SvgProperties>(VanillaCirclePowerIcon)
export const CirclePower: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCirclePowerIcon>
> = CirclePowerIcon
    