
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AnvilIcon as VanillaAnvilIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AnvilIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAnvilIcon>
> = /*@__PURE__*/ build<VanillaAnvilIcon, SvgProperties>(VanillaAnvilIcon)
export const Anvil: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAnvilIcon>
> = AnvilIcon
    