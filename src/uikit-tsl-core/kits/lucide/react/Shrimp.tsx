
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShrimpIcon as VanillaShrimpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShrimpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShrimpIcon>
> = /*@__PURE__*/ build<VanillaShrimpIcon, SvgProperties>(VanillaShrimpIcon, "VanillaShrimpIcon")
export const Shrimp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShrimpIcon>
> = ShrimpIcon
    