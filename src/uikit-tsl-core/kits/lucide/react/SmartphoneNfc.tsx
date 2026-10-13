
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SmartphoneNfcIcon as VanillaSmartphoneNfcIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SmartphoneNfcIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSmartphoneNfcIcon>
> = /*@__PURE__*/ build<VanillaSmartphoneNfcIcon, SvgProperties>(VanillaSmartphoneNfcIcon)
export const SmartphoneNfc: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSmartphoneNfcIcon>
> = SmartphoneNfcIcon
    