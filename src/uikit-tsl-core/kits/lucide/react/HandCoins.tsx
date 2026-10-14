
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HandCoinsIcon as VanillaHandCoinsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HandCoinsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHandCoinsIcon>
> = /*@__PURE__*/ build<VanillaHandCoinsIcon, SvgProperties>(VanillaHandCoinsIcon, "VanillaHandCoinsIcon")
export const HandCoins: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHandCoinsIcon>
> = HandCoinsIcon
    