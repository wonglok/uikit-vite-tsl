
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BellDotIcon as VanillaBellDotIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BellDotIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBellDotIcon>
> = /*@__PURE__*/ build<VanillaBellDotIcon, SvgProperties>(VanillaBellDotIcon, "VanillaBellDotIcon")
export const BellDot: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBellDotIcon>
> = BellDotIcon
    