
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ProportionsIcon as VanillaProportionsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ProportionsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaProportionsIcon>
> = /*@__PURE__*/ build<VanillaProportionsIcon, SvgProperties>(VanillaProportionsIcon)
export const Proportions: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaProportionsIcon>
> = ProportionsIcon
    