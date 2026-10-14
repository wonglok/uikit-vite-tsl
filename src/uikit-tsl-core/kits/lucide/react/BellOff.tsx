
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BellOffIcon as VanillaBellOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BellOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBellOffIcon>
> = /*@__PURE__*/ build<VanillaBellOffIcon, SvgProperties>(VanillaBellOffIcon, "VanillaBellOffIcon")
export const BellOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBellOffIcon>
> = BellOffIcon
    