
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BadgeAlertIcon as VanillaBadgeAlertIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BadgeAlertIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgeAlertIcon>
> = /*@__PURE__*/ build<VanillaBadgeAlertIcon, SvgProperties>(VanillaBadgeAlertIcon)
export const BadgeAlert: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgeAlertIcon>
> = BadgeAlertIcon
    