
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BeerIcon as VanillaBeerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BeerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBeerIcon>
> = /*@__PURE__*/ build<VanillaBeerIcon, SvgProperties>(VanillaBeerIcon)
export const Beer: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBeerIcon>
> = BeerIcon
    