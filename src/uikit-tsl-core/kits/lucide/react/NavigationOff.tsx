
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { NavigationOffIcon as VanillaNavigationOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const NavigationOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNavigationOffIcon>
> = /*@__PURE__*/ build<VanillaNavigationOffIcon, SvgProperties>(VanillaNavigationOffIcon)
export const NavigationOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNavigationOffIcon>
> = NavigationOffIcon
    