
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MoveDownLeftIcon as VanillaMoveDownLeftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MoveDownLeftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveDownLeftIcon>
> = /*@__PURE__*/ build<VanillaMoveDownLeftIcon, SvgProperties>(VanillaMoveDownLeftIcon)
export const MoveDownLeft: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveDownLeftIcon>
> = MoveDownLeftIcon
    