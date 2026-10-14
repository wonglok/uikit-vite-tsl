
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SmartphoneIcon as VanillaSmartphoneIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SmartphoneIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSmartphoneIcon>
> = /*@__PURE__*/ build<VanillaSmartphoneIcon, SvgProperties>(VanillaSmartphoneIcon, "VanillaSmartphoneIcon")
export const Smartphone: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSmartphoneIcon>
> = SmartphoneIcon
    