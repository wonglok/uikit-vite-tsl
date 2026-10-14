
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MoveLeftIcon as VanillaMoveLeftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MoveLeftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveLeftIcon>
> = /*@__PURE__*/ build<VanillaMoveLeftIcon, SvgProperties>(VanillaMoveLeftIcon, "VanillaMoveLeftIcon")
export const MoveLeft: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveLeftIcon>
> = MoveLeftIcon
    