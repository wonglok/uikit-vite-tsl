
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BrickWallFireIcon as VanillaBrickWallFireIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BrickWallFireIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBrickWallFireIcon>
> = /*@__PURE__*/ build<VanillaBrickWallFireIcon, SvgProperties>(VanillaBrickWallFireIcon, "VanillaBrickWallFireIcon")
export const BrickWallFire: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBrickWallFireIcon>
> = BrickWallFireIcon
    