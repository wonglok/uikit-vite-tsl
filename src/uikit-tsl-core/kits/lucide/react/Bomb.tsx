
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BombIcon as VanillaBombIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BombIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBombIcon>
> = /*@__PURE__*/ build<VanillaBombIcon, SvgProperties>(VanillaBombIcon, "VanillaBombIcon")
export const Bomb: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBombIcon>
> = BombIcon
    