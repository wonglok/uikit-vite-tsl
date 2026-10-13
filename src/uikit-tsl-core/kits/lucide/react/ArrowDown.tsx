
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArrowDownIcon as VanillaArrowDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArrowDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowDownIcon>
> = /*@__PURE__*/ build<VanillaArrowDownIcon, SvgProperties>(VanillaArrowDownIcon)
export const ArrowDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowDownIcon>
> = ArrowDownIcon
    