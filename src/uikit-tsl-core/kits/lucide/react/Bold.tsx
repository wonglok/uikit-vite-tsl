
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BoldIcon as VanillaBoldIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BoldIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBoldIcon>
> = /*@__PURE__*/ build<VanillaBoldIcon, SvgProperties>(VanillaBoldIcon)
export const Bold: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBoldIcon>
> = BoldIcon
    