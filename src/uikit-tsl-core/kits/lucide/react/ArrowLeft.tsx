
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArrowLeftIcon as VanillaArrowLeftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArrowLeftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowLeftIcon>
> = /*@__PURE__*/ build<VanillaArrowLeftIcon, SvgProperties>(VanillaArrowLeftIcon, "VanillaArrowLeftIcon")
export const ArrowLeft: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowLeftIcon>
> = ArrowLeftIcon
    