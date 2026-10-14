
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RollerCoasterIcon as VanillaRollerCoasterIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RollerCoasterIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRollerCoasterIcon>
> = /*@__PURE__*/ build<VanillaRollerCoasterIcon, SvgProperties>(VanillaRollerCoasterIcon, "VanillaRollerCoasterIcon")
export const RollerCoaster: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRollerCoasterIcon>
> = RollerCoasterIcon
    