
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BusIcon as VanillaBusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBusIcon>
> = /*@__PURE__*/ build<VanillaBusIcon, SvgProperties>(VanillaBusIcon)
export const Bus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBusIcon>
> = BusIcon
    