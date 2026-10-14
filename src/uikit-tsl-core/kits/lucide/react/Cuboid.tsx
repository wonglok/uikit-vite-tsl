
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CuboidIcon as VanillaCuboidIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CuboidIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCuboidIcon>
> = /*@__PURE__*/ build<VanillaCuboidIcon, SvgProperties>(VanillaCuboidIcon, "VanillaCuboidIcon")
export const Cuboid: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCuboidIcon>
> = CuboidIcon
    