
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DumbbellIcon as VanillaDumbbellIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DumbbellIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDumbbellIcon>
> = /*@__PURE__*/ build<VanillaDumbbellIcon, SvgProperties>(VanillaDumbbellIcon)
export const Dumbbell: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDumbbellIcon>
> = DumbbellIcon
    