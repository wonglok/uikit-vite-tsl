
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PhoneCallIcon as VanillaPhoneCallIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PhoneCallIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPhoneCallIcon>
> = /*@__PURE__*/ build<VanillaPhoneCallIcon, SvgProperties>(VanillaPhoneCallIcon, "VanillaPhoneCallIcon")
export const PhoneCall: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPhoneCallIcon>
> = PhoneCallIcon
    