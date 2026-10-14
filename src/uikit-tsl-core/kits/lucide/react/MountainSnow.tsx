
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MountainSnowIcon as VanillaMountainSnowIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MountainSnowIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMountainSnowIcon>
> = /*@__PURE__*/ build<VanillaMountainSnowIcon, SvgProperties>(VanillaMountainSnowIcon, "VanillaMountainSnowIcon")
export const MountainSnow: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMountainSnowIcon>
> = MountainSnowIcon
    