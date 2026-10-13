
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RouterIcon as VanillaRouterIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RouterIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRouterIcon>
> = /*@__PURE__*/ build<VanillaRouterIcon, SvgProperties>(VanillaRouterIcon)
export const Router: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRouterIcon>
> = RouterIcon
    