
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArrowBigUpIcon as VanillaArrowBigUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArrowBigUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowBigUpIcon>
> = /*@__PURE__*/ build<VanillaArrowBigUpIcon, SvgProperties>(VanillaArrowBigUpIcon)
export const ArrowBigUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowBigUpIcon>
> = ArrowBigUpIcon
    