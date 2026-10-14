
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ActivityIcon as VanillaActivityIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ActivityIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaActivityIcon>
> = /*@__PURE__*/ build<VanillaActivityIcon, SvgProperties>(VanillaActivityIcon, "VanillaActivityIcon")
export const Activity: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaActivityIcon>
> = ActivityIcon
    