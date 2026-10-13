
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArrowDownLeftIcon as VanillaArrowDownLeftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArrowDownLeftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowDownLeftIcon>
> = /*@__PURE__*/ build<VanillaArrowDownLeftIcon, SvgProperties>(VanillaArrowDownLeftIcon)
export const ArrowDownLeft: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowDownLeftIcon>
> = ArrowDownLeftIcon
    