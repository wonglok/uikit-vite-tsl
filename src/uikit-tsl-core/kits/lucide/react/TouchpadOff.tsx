
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TouchpadOffIcon as VanillaTouchpadOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TouchpadOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTouchpadOffIcon>
> = /*@__PURE__*/ build<VanillaTouchpadOffIcon, SvgProperties>(VanillaTouchpadOffIcon, "VanillaTouchpadOffIcon")
export const TouchpadOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTouchpadOffIcon>
> = TouchpadOffIcon
    