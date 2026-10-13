
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SyringeIcon as VanillaSyringeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SyringeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSyringeIcon>
> = /*@__PURE__*/ build<VanillaSyringeIcon, SvgProperties>(VanillaSyringeIcon)
export const Syringe: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSyringeIcon>
> = SyringeIcon
    