
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TurtleIcon as VanillaTurtleIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TurtleIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTurtleIcon>
> = /*@__PURE__*/ build<VanillaTurtleIcon, SvgProperties>(VanillaTurtleIcon)
export const Turtle: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTurtleIcon>
> = TurtleIcon
    