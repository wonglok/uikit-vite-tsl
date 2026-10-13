
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BeefIcon as VanillaBeefIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BeefIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBeefIcon>
> = /*@__PURE__*/ build<VanillaBeefIcon, SvgProperties>(VanillaBeefIcon)
export const Beef: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBeefIcon>
> = BeefIcon
    