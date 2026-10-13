
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BadgeEuroIcon as VanillaBadgeEuroIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BadgeEuroIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgeEuroIcon>
> = /*@__PURE__*/ build<VanillaBadgeEuroIcon, SvgProperties>(VanillaBadgeEuroIcon)
export const BadgeEuro: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgeEuroIcon>
> = BadgeEuroIcon
    