
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MoveIcon as VanillaMoveIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MoveIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveIcon>
> = /*@__PURE__*/ build<VanillaMoveIcon, SvgProperties>(VanillaMoveIcon)
export const Move: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveIcon>
> = MoveIcon
    