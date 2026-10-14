
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BadgeIcon as VanillaBadgeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BadgeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgeIcon>
> = /*@__PURE__*/ build<VanillaBadgeIcon, SvgProperties>(VanillaBadgeIcon, "VanillaBadgeIcon")
export const Badge: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgeIcon>
> = BadgeIcon
    