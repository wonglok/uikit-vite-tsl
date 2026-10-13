
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquarePowerIcon as VanillaSquarePowerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquarePowerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquarePowerIcon>
> = /*@__PURE__*/ build<VanillaSquarePowerIcon, SvgProperties>(VanillaSquarePowerIcon)
export const SquarePower: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquarePowerIcon>
> = SquarePowerIcon
    