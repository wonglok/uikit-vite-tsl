
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MoveRightIcon as VanillaMoveRightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MoveRightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveRightIcon>
> = /*@__PURE__*/ build<VanillaMoveRightIcon, SvgProperties>(VanillaMoveRightIcon)
export const MoveRight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveRightIcon>
> = MoveRightIcon
    