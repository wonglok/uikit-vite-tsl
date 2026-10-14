
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShieldPlusIcon as VanillaShieldPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShieldPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldPlusIcon>
> = /*@__PURE__*/ build<VanillaShieldPlusIcon, SvgProperties>(VanillaShieldPlusIcon, "VanillaShieldPlusIcon")
export const ShieldPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldPlusIcon>
> = ShieldPlusIcon
    