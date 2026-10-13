
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BellIcon as VanillaBellIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BellIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBellIcon>
> = /*@__PURE__*/ build<VanillaBellIcon, SvgProperties>(VanillaBellIcon)
export const Bell: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBellIcon>
> = BellIcon
    