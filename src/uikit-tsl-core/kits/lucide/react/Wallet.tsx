
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WalletIcon as VanillaWalletIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WalletIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWalletIcon>
> = /*@__PURE__*/ build<VanillaWalletIcon, SvgProperties>(VanillaWalletIcon, "VanillaWalletIcon")
export const Wallet: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWalletIcon>
> = WalletIcon
    