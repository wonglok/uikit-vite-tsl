
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArrowLeftRightIcon as VanillaArrowLeftRightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArrowLeftRightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowLeftRightIcon>
> = /*@__PURE__*/ build<VanillaArrowLeftRightIcon, SvgProperties>(VanillaArrowLeftRightIcon, "VanillaArrowLeftRightIcon")
export const ArrowLeftRight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowLeftRightIcon>
> = ArrowLeftRightIcon
    