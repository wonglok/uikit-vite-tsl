
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArrowBigLeftIcon as VanillaArrowBigLeftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArrowBigLeftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowBigLeftIcon>
> = /*@__PURE__*/ build<VanillaArrowBigLeftIcon, SvgProperties>(VanillaArrowBigLeftIcon)
export const ArrowBigLeft: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowBigLeftIcon>
> = ArrowBigLeftIcon
    