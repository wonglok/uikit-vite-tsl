
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { NavigationIcon as VanillaNavigationIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const NavigationIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNavigationIcon>
> = /*@__PURE__*/ build<VanillaNavigationIcon, SvgProperties>(VanillaNavigationIcon, "VanillaNavigationIcon")
export const Navigation: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNavigationIcon>
> = NavigationIcon
    