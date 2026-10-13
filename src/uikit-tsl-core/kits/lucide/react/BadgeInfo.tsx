
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BadgeInfoIcon as VanillaBadgeInfoIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BadgeInfoIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgeInfoIcon>
> = /*@__PURE__*/ build<VanillaBadgeInfoIcon, SvgProperties>(VanillaBadgeInfoIcon)
export const BadgeInfo: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgeInfoIcon>
> = BadgeInfoIcon
    