
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { VaultIcon as VanillaVaultIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const VaultIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVaultIcon>
> = /*@__PURE__*/ build<VanillaVaultIcon, SvgProperties>(VanillaVaultIcon, "VanillaVaultIcon")
export const Vault: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVaultIcon>
> = VaultIcon
    