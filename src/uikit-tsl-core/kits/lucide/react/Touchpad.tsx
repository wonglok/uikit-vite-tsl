
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TouchpadIcon as VanillaTouchpadIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TouchpadIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTouchpadIcon>
> = /*@__PURE__*/ build<VanillaTouchpadIcon, SvgProperties>(VanillaTouchpadIcon, "VanillaTouchpadIcon")
export const Touchpad: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTouchpadIcon>
> = TouchpadIcon
    