
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WalletCardsIcon as VanillaWalletCardsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WalletCardsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWalletCardsIcon>
> = /*@__PURE__*/ build<VanillaWalletCardsIcon, SvgProperties>(VanillaWalletCardsIcon)
export const WalletCards: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWalletCardsIcon>
> = WalletCardsIcon
    