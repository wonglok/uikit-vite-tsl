
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BadgePercentIcon as VanillaBadgePercentIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BadgePercentIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgePercentIcon>
> = /*@__PURE__*/ build<VanillaBadgePercentIcon, SvgProperties>(VanillaBadgePercentIcon)
export const BadgePercent: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgePercentIcon>
> = BadgePercentIcon
    