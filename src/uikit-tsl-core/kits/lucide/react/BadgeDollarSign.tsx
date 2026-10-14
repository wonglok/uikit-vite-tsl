
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BadgeDollarSignIcon as VanillaBadgeDollarSignIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BadgeDollarSignIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgeDollarSignIcon>
> = /*@__PURE__*/ build<VanillaBadgeDollarSignIcon, SvgProperties>(VanillaBadgeDollarSignIcon, "VanillaBadgeDollarSignIcon")
export const BadgeDollarSign: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBadgeDollarSignIcon>
> = BadgeDollarSignIcon
    