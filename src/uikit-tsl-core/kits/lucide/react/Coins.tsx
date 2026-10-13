
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CoinsIcon as VanillaCoinsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CoinsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCoinsIcon>
> = /*@__PURE__*/ build<VanillaCoinsIcon, SvgProperties>(VanillaCoinsIcon)
export const Coins: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCoinsIcon>
> = CoinsIcon
    