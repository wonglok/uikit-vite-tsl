
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BadgeHelpIcon as VanillaBadgeHelpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BadgeHelpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgeHelpIcon>
> = /*@__PURE__*/ build<VanillaBadgeHelpIcon, SvgProperties>(VanillaBadgeHelpIcon)
export const BadgeHelp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgeHelpIcon>
> = BadgeHelpIcon
    