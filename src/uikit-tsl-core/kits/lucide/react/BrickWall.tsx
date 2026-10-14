
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BrickWallIcon as VanillaBrickWallIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BrickWallIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBrickWallIcon>
> = /*@__PURE__*/ build<VanillaBrickWallIcon, SvgProperties>(VanillaBrickWallIcon, "VanillaBrickWallIcon")
export const BrickWall: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBrickWallIcon>
> = BrickWallIcon
    