
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MoveDownIcon as VanillaMoveDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MoveDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveDownIcon>
> = /*@__PURE__*/ build<VanillaMoveDownIcon, SvgProperties>(VanillaMoveDownIcon, "VanillaMoveDownIcon")
export const MoveDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveDownIcon>
> = MoveDownIcon
    