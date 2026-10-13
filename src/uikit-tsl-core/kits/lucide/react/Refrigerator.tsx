
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RefrigeratorIcon as VanillaRefrigeratorIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RefrigeratorIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRefrigeratorIcon>
> = /*@__PURE__*/ build<VanillaRefrigeratorIcon, SvgProperties>(VanillaRefrigeratorIcon)
export const Refrigerator: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRefrigeratorIcon>
> = RefrigeratorIcon
    