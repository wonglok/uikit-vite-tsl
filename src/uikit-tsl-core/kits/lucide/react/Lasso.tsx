
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LassoIcon as VanillaLassoIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LassoIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLassoIcon>
> = /*@__PURE__*/ build<VanillaLassoIcon, SvgProperties>(VanillaLassoIcon, "VanillaLassoIcon")
export const Lasso: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLassoIcon>
> = LassoIcon
    