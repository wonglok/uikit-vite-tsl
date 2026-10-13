
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MoveUpIcon as VanillaMoveUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MoveUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveUpIcon>
> = /*@__PURE__*/ build<VanillaMoveUpIcon, SvgProperties>(VanillaMoveUpIcon)
export const MoveUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveUpIcon>
> = MoveUpIcon
    