
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArrowDownUpIcon as VanillaArrowDownUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArrowDownUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowDownUpIcon>
> = /*@__PURE__*/ build<VanillaArrowDownUpIcon, SvgProperties>(VanillaArrowDownUpIcon)
export const ArrowDownUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowDownUpIcon>
> = ArrowDownUpIcon
    