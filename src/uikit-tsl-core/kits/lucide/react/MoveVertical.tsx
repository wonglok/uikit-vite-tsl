
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MoveVerticalIcon as VanillaMoveVerticalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MoveVerticalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveVerticalIcon>
> = /*@__PURE__*/ build<VanillaMoveVerticalIcon, SvgProperties>(VanillaMoveVerticalIcon, "VanillaMoveVerticalIcon")
export const MoveVertical: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveVerticalIcon>
> = MoveVerticalIcon
    