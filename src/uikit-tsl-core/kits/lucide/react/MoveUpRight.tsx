
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MoveUpRightIcon as VanillaMoveUpRightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MoveUpRightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveUpRightIcon>
> = /*@__PURE__*/ build<VanillaMoveUpRightIcon, SvgProperties>(VanillaMoveUpRightIcon)
export const MoveUpRight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveUpRightIcon>
> = MoveUpRightIcon
    