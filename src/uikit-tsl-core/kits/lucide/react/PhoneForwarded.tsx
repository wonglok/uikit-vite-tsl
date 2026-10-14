
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PhoneForwardedIcon as VanillaPhoneForwardedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PhoneForwardedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPhoneForwardedIcon>
> = /*@__PURE__*/ build<VanillaPhoneForwardedIcon, SvgProperties>(VanillaPhoneForwardedIcon, "VanillaPhoneForwardedIcon")
export const PhoneForwarded: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPhoneForwardedIcon>
> = PhoneForwardedIcon
    