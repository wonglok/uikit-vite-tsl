
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BikeIcon as VanillaBikeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BikeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBikeIcon>
> = /*@__PURE__*/ build<VanillaBikeIcon, SvgProperties>(VanillaBikeIcon, "VanillaBikeIcon")
export const Bike: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBikeIcon>
> = BikeIcon
    