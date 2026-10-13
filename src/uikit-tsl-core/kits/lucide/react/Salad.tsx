
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SaladIcon as VanillaSaladIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SaladIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSaladIcon>
> = /*@__PURE__*/ build<VanillaSaladIcon, SvgProperties>(VanillaSaladIcon)
export const Salad: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSaladIcon>
> = SaladIcon
    