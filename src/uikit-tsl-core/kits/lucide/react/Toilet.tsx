
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ToiletIcon as VanillaToiletIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ToiletIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaToiletIcon>
> = /*@__PURE__*/ build<VanillaToiletIcon, SvgProperties>(VanillaToiletIcon)
export const Toilet: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaToiletIcon>
> = ToiletIcon
    