
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WatchIcon as VanillaWatchIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WatchIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWatchIcon>
> = /*@__PURE__*/ build<VanillaWatchIcon, SvgProperties>(VanillaWatchIcon)
export const Watch: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWatchIcon>
> = WatchIcon
    