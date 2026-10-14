
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArrowBigRightIcon as VanillaArrowBigRightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArrowBigRightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowBigRightIcon>
> = /*@__PURE__*/ build<VanillaArrowBigRightIcon, SvgProperties>(VanillaArrowBigRightIcon, "VanillaArrowBigRightIcon")
export const ArrowBigRight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowBigRightIcon>
> = ArrowBigRightIcon
    