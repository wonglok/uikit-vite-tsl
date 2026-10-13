
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FlagTriangleLeftIcon as VanillaFlagTriangleLeftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FlagTriangleLeftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlagTriangleLeftIcon>
> = /*@__PURE__*/ build<VanillaFlagTriangleLeftIcon, SvgProperties>(VanillaFlagTriangleLeftIcon)
export const FlagTriangleLeft: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlagTriangleLeftIcon>
> = FlagTriangleLeftIcon
    