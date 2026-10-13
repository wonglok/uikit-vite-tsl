
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArrowBigUpDashIcon as VanillaArrowBigUpDashIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArrowBigUpDashIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowBigUpDashIcon>
> = /*@__PURE__*/ build<VanillaArrowBigUpDashIcon, SvgProperties>(VanillaArrowBigUpDashIcon)
export const ArrowBigUpDash: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowBigUpDashIcon>
> = ArrowBigUpDashIcon
    