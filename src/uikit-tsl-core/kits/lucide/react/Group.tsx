
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GroupIcon as VanillaGroupIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GroupIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGroupIcon>
> = /*@__PURE__*/ build<VanillaGroupIcon, SvgProperties>(VanillaGroupIcon)
export const Group: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGroupIcon>
> = GroupIcon
    