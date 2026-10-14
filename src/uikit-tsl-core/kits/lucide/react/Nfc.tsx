
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { NfcIcon as VanillaNfcIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const NfcIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNfcIcon>
> = /*@__PURE__*/ build<VanillaNfcIcon, SvgProperties>(VanillaNfcIcon, "VanillaNfcIcon")
export const Nfc: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNfcIcon>
> = NfcIcon
    