
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MountainIcon as VanillaMountainIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MountainIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMountainIcon>
> = /*@__PURE__*/ build<VanillaMountainIcon, SvgProperties>(VanillaMountainIcon, "VanillaMountainIcon")
export const Mountain: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMountainIcon>
> = MountainIcon
    