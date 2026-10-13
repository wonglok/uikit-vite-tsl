
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { EarOffIcon as VanillaEarOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const EarOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEarOffIcon>
> = /*@__PURE__*/ build<VanillaEarOffIcon, SvgProperties>(VanillaEarOffIcon)
export const EarOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEarOffIcon>
> = EarOffIcon
    