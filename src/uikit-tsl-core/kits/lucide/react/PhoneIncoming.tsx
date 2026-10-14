
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PhoneIncomingIcon as VanillaPhoneIncomingIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PhoneIncomingIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPhoneIncomingIcon>
> = /*@__PURE__*/ build<VanillaPhoneIncomingIcon, SvgProperties>(VanillaPhoneIncomingIcon, "VanillaPhoneIncomingIcon")
export const PhoneIncoming: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPhoneIncomingIcon>
> = PhoneIncomingIcon
    