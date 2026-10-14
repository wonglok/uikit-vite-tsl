
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { EyeClosedIcon as VanillaEyeClosedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const EyeClosedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEyeClosedIcon>
> = /*@__PURE__*/ build<VanillaEyeClosedIcon, SvgProperties>(VanillaEyeClosedIcon, "VanillaEyeClosedIcon")
export const EyeClosed: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEyeClosedIcon>
> = EyeClosedIcon
    