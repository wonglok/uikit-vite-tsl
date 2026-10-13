
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RocketIcon as VanillaRocketIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RocketIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRocketIcon>
> = /*@__PURE__*/ build<VanillaRocketIcon, SvgProperties>(VanillaRocketIcon)
export const Rocket: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRocketIcon>
> = RocketIcon
    