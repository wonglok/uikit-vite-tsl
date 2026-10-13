
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HazeIcon as VanillaHazeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HazeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHazeIcon>
> = /*@__PURE__*/ build<VanillaHazeIcon, SvgProperties>(VanillaHazeIcon)
export const Haze: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHazeIcon>
> = HazeIcon
    