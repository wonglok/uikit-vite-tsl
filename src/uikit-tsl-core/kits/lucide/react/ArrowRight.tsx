
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArrowRightIcon as VanillaArrowRightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArrowRightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowRightIcon>
> = /*@__PURE__*/ build<VanillaArrowRightIcon, SvgProperties>(VanillaArrowRightIcon)
export const ArrowRight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowRightIcon>
> = ArrowRightIcon
    