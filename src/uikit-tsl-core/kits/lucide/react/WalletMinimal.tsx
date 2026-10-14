
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WalletMinimalIcon as VanillaWalletMinimalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WalletMinimalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWalletMinimalIcon>
> = /*@__PURE__*/ build<VanillaWalletMinimalIcon, SvgProperties>(VanillaWalletMinimalIcon, "VanillaWalletMinimalIcon")
export const WalletMinimal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWalletMinimalIcon>
> = WalletMinimalIcon
    