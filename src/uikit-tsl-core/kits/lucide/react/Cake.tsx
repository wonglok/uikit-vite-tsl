
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CakeIcon as VanillaCakeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CakeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCakeIcon>
> = /*@__PURE__*/ build<VanillaCakeIcon, SvgProperties>(VanillaCakeIcon)
export const Cake: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCakeIcon>
> = CakeIcon
    