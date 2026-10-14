
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BellRingIcon as VanillaBellRingIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BellRingIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBellRingIcon>
> = /*@__PURE__*/ build<VanillaBellRingIcon, SvgProperties>(VanillaBellRingIcon, "VanillaBellRingIcon")
export const BellRing: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBellRingIcon>
> = BellRingIcon
    