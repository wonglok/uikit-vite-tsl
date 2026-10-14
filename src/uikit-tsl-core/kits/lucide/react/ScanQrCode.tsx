
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ScanQrCodeIcon as VanillaScanQrCodeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ScanQrCodeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScanQrCodeIcon>
> = /*@__PURE__*/ build<VanillaScanQrCodeIcon, SvgProperties>(VanillaScanQrCodeIcon, "VanillaScanQrCodeIcon")
export const ScanQrCode: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScanQrCodeIcon>
> = ScanQrCodeIcon
    