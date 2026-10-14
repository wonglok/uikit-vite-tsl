
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DessertIcon as VanillaDessertIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DessertIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDessertIcon>
> = /*@__PURE__*/ build<VanillaDessertIcon, SvgProperties>(VanillaDessertIcon, "VanillaDessertIcon")
export const Dessert: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDessertIcon>
> = DessertIcon
    