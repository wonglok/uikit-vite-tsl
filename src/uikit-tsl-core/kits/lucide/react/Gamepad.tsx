
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GamepadIcon as VanillaGamepadIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GamepadIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGamepadIcon>
> = /*@__PURE__*/ build<VanillaGamepadIcon, SvgProperties>(VanillaGamepadIcon)
export const Gamepad: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGamepadIcon>
> = GamepadIcon
    