
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DonutIcon as VanillaDonutIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DonutIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDonutIcon>
> = /*@__PURE__*/ build<VanillaDonutIcon, SvgProperties>(VanillaDonutIcon, "VanillaDonutIcon")
export const Donut: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDonutIcon>
> = DonutIcon
    