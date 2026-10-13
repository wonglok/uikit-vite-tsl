
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PinOffIcon as VanillaPinOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PinOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPinOffIcon>
> = /*@__PURE__*/ build<VanillaPinOffIcon, SvgProperties>(VanillaPinOffIcon)
export const PinOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPinOffIcon>
> = PinOffIcon
    