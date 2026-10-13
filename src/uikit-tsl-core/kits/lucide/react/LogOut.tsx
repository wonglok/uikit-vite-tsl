
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LogOutIcon as VanillaLogOutIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LogOutIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLogOutIcon>
> = /*@__PURE__*/ build<VanillaLogOutIcon, SvgProperties>(VanillaLogOutIcon)
export const LogOut: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLogOutIcon>
> = LogOutIcon
    