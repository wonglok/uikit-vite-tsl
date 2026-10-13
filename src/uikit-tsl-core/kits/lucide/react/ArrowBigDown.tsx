
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArrowBigDownIcon as VanillaArrowBigDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArrowBigDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowBigDownIcon>
> = /*@__PURE__*/ build<VanillaArrowBigDownIcon, SvgProperties>(VanillaArrowBigDownIcon)
export const ArrowBigDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowBigDownIcon>
> = ArrowBigDownIcon
    