
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MoveHorizontalIcon as VanillaMoveHorizontalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MoveHorizontalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveHorizontalIcon>
> = /*@__PURE__*/ build<VanillaMoveHorizontalIcon, SvgProperties>(VanillaMoveHorizontalIcon)
export const MoveHorizontal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveHorizontalIcon>
> = MoveHorizontalIcon
    