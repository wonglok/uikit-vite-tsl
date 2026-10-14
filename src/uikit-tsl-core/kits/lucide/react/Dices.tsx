
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DicesIcon as VanillaDicesIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DicesIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDicesIcon>
> = /*@__PURE__*/ build<VanillaDicesIcon, SvgProperties>(VanillaDicesIcon, "VanillaDicesIcon")
export const Dices: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDicesIcon>
> = DicesIcon
    