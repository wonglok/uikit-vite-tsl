
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HeartCrackIcon as VanillaHeartCrackIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HeartCrackIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeartCrackIcon>
> = /*@__PURE__*/ build<VanillaHeartCrackIcon, SvgProperties>(VanillaHeartCrackIcon)
export const HeartCrack: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeartCrackIcon>
> = HeartCrackIcon
    