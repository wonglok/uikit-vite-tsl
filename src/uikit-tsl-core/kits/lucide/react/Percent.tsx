
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PercentIcon as VanillaPercentIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PercentIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPercentIcon>
> = /*@__PURE__*/ build<VanillaPercentIcon, SvgProperties>(VanillaPercentIcon, "VanillaPercentIcon")
export const Percent: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPercentIcon>
> = PercentIcon
    