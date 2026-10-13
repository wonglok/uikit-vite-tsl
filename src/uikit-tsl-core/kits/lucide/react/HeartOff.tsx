
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HeartOffIcon as VanillaHeartOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HeartOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeartOffIcon>
> = /*@__PURE__*/ build<VanillaHeartOffIcon, SvgProperties>(VanillaHeartOffIcon)
export const HeartOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeartOffIcon>
> = HeartOffIcon
    