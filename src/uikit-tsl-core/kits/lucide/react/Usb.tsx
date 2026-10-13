
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UsbIcon as VanillaUsbIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UsbIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUsbIcon>
> = /*@__PURE__*/ build<VanillaUsbIcon, SvgProperties>(VanillaUsbIcon)
export const Usb: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUsbIcon>
> = UsbIcon
    