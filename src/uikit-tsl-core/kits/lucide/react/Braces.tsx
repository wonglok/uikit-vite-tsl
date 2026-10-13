
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BracesIcon as VanillaBracesIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BracesIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBracesIcon>
> = /*@__PURE__*/ build<VanillaBracesIcon, SvgProperties>(VanillaBracesIcon)
export const Braces: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBracesIcon>
> = BracesIcon
    