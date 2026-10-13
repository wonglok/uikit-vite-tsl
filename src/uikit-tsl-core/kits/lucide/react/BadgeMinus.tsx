
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BadgeMinusIcon as VanillaBadgeMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BadgeMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgeMinusIcon>
> = /*@__PURE__*/ build<VanillaBadgeMinusIcon, SvgProperties>(VanillaBadgeMinusIcon)
export const BadgeMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgeMinusIcon>
> = BadgeMinusIcon
    