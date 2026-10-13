
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BadgeCentIcon as VanillaBadgeCentIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BadgeCentIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgeCentIcon>
> = /*@__PURE__*/ build<VanillaBadgeCentIcon, SvgProperties>(VanillaBadgeCentIcon)
export const BadgeCent: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgeCentIcon>
> = BadgeCentIcon
    