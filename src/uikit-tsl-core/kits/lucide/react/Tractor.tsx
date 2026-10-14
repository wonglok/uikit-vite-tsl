
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TractorIcon as VanillaTractorIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TractorIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTractorIcon>
> = /*@__PURE__*/ build<VanillaTractorIcon, SvgProperties>(VanillaTractorIcon, "VanillaTractorIcon")
export const Tractor: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTractorIcon>
> = TractorIcon
    