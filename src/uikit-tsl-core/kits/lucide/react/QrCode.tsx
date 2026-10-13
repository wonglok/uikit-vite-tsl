
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { QrCodeIcon as VanillaQrCodeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const QrCodeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaQrCodeIcon>
> = /*@__PURE__*/ build<VanillaQrCodeIcon, SvgProperties>(VanillaQrCodeIcon)
export const QrCode: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaQrCodeIcon>
> = QrCodeIcon
    