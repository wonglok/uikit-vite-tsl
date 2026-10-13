
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArrowUpZAIcon as VanillaArrowUpZAIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArrowUpZAIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowUpZAIcon>
> = /*@__PURE__*/ build<VanillaArrowUpZAIcon, SvgProperties>(VanillaArrowUpZAIcon)
export const ArrowUpZA: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowUpZAIcon>
> = ArrowUpZAIcon
    