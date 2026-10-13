
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Gamepad2Icon as VanillaGamepad2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Gamepad2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGamepad2Icon>
> = /*@__PURE__*/ build<VanillaGamepad2Icon, SvgProperties>(VanillaGamepad2Icon)
export const Gamepad2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGamepad2Icon>
> = Gamepad2Icon
    