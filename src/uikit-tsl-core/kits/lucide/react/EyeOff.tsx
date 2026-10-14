
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { EyeOffIcon as VanillaEyeOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const EyeOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEyeOffIcon>
> = /*@__PURE__*/ build<VanillaEyeOffIcon, SvgProperties>(VanillaEyeOffIcon, "VanillaEyeOffIcon")
export const EyeOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEyeOffIcon>
> = EyeOffIcon
    