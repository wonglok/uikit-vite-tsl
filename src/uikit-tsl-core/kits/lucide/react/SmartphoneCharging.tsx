
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SmartphoneChargingIcon as VanillaSmartphoneChargingIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SmartphoneChargingIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSmartphoneChargingIcon>
> = /*@__PURE__*/ build<VanillaSmartphoneChargingIcon, SvgProperties>(VanillaSmartphoneChargingIcon)
export const SmartphoneCharging: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSmartphoneChargingIcon>
> = SmartphoneChargingIcon
    