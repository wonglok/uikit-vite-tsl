
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HeartPlusIcon as VanillaHeartPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HeartPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeartPlusIcon>
> = /*@__PURE__*/ build<VanillaHeartPlusIcon, SvgProperties>(VanillaHeartPlusIcon, "VanillaHeartPlusIcon")
export const HeartPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeartPlusIcon>
> = HeartPlusIcon
    