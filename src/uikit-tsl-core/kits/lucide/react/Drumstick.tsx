
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DrumstickIcon as VanillaDrumstickIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DrumstickIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDrumstickIcon>
> = /*@__PURE__*/ build<VanillaDrumstickIcon, SvgProperties>(VanillaDrumstickIcon)
export const Drumstick: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDrumstickIcon>
> = DrumstickIcon
    