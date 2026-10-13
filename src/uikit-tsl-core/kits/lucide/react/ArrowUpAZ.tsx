
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArrowUpAZIcon as VanillaArrowUpAZIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArrowUpAZIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowUpAZIcon>
> = /*@__PURE__*/ build<VanillaArrowUpAZIcon, SvgProperties>(VanillaArrowUpAZIcon)
export const ArrowUpAZ: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowUpAZIcon>
> = ArrowUpAZIcon
    