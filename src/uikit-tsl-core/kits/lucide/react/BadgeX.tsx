
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BadgeXIcon as VanillaBadgeXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BadgeXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgeXIcon>
> = /*@__PURE__*/ build<VanillaBadgeXIcon, SvgProperties>(VanillaBadgeXIcon, "VanillaBadgeXIcon")
export const BadgeX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgeXIcon>
> = BadgeXIcon
    