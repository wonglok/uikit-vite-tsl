
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HeartIcon as VanillaHeartIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HeartIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeartIcon>
> = /*@__PURE__*/ build<VanillaHeartIcon, SvgProperties>(VanillaHeartIcon)
export const Heart: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeartIcon>
> = HeartIcon
    