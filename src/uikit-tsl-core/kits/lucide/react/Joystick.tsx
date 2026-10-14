
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { JoystickIcon as VanillaJoystickIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const JoystickIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaJoystickIcon>
> = /*@__PURE__*/ build<VanillaJoystickIcon, SvgProperties>(VanillaJoystickIcon, "VanillaJoystickIcon")
export const Joystick: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaJoystickIcon>
> = JoystickIcon
    