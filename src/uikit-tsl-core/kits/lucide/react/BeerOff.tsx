
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BeerOffIcon as VanillaBeerOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BeerOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBeerOffIcon>
> = /*@__PURE__*/ build<VanillaBeerOffIcon, SvgProperties>(VanillaBeerOffIcon, "VanillaBeerOffIcon")
export const BeerOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBeerOffIcon>
> = BeerOffIcon
    