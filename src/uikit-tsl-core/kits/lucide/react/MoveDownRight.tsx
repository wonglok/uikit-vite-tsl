
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MoveDownRightIcon as VanillaMoveDownRightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MoveDownRightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveDownRightIcon>
> = /*@__PURE__*/ build<VanillaMoveDownRightIcon, SvgProperties>(VanillaMoveDownRightIcon)
export const MoveDownRight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveDownRightIcon>
> = MoveDownRightIcon
    