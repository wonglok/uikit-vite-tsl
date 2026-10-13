
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArrowDownToLineIcon as VanillaArrowDownToLineIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArrowDownToLineIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowDownToLineIcon>
> = /*@__PURE__*/ build<VanillaArrowDownToLineIcon, SvgProperties>(VanillaArrowDownToLineIcon)
export const ArrowDownToLine: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowDownToLineIcon>
> = ArrowDownToLineIcon
    