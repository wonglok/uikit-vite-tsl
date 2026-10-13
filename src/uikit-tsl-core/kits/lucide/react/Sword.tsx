
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SwordIcon as VanillaSwordIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SwordIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSwordIcon>
> = /*@__PURE__*/ build<VanillaSwordIcon, SvgProperties>(VanillaSwordIcon)
export const Sword: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSwordIcon>
> = SwordIcon
    