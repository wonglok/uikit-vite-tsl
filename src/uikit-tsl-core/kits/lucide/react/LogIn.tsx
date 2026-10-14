
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LogInIcon as VanillaLogInIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LogInIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLogInIcon>
> = /*@__PURE__*/ build<VanillaLogInIcon, SvgProperties>(VanillaLogInIcon, "VanillaLogInIcon")
export const LogIn: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLogInIcon>
> = LogInIcon
    