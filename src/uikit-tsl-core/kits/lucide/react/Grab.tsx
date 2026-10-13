
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GrabIcon as VanillaGrabIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GrabIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGrabIcon>
> = /*@__PURE__*/ build<VanillaGrabIcon, SvgProperties>(VanillaGrabIcon)
export const Grab: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGrabIcon>
> = GrabIcon
    