
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArrowUpFromLineIcon as VanillaArrowUpFromLineIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArrowUpFromLineIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowUpFromLineIcon>
> = /*@__PURE__*/ build<VanillaArrowUpFromLineIcon, SvgProperties>(VanillaArrowUpFromLineIcon)
export const ArrowUpFromLine: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowUpFromLineIcon>
> = ArrowUpFromLineIcon
    