
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PhoneOutgoingIcon as VanillaPhoneOutgoingIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PhoneOutgoingIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPhoneOutgoingIcon>
> = /*@__PURE__*/ build<VanillaPhoneOutgoingIcon, SvgProperties>(VanillaPhoneOutgoingIcon, "VanillaPhoneOutgoingIcon")
export const PhoneOutgoing: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPhoneOutgoingIcon>
> = PhoneOutgoingIcon
    