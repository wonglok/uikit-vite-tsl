
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BadgeCheckIcon as VanillaBadgeCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BadgeCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgeCheckIcon>
> = /*@__PURE__*/ build<VanillaBadgeCheckIcon, SvgProperties>(VanillaBadgeCheckIcon)
export const BadgeCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgeCheckIcon>
> = BadgeCheckIcon
    