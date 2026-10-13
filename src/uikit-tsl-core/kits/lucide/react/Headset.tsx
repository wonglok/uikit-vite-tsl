
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HeadsetIcon as VanillaHeadsetIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HeadsetIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeadsetIcon>
> = /*@__PURE__*/ build<VanillaHeadsetIcon, SvgProperties>(VanillaHeadsetIcon)
export const Headset: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeadsetIcon>
> = HeadsetIcon
    