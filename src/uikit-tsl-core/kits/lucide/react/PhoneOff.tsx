
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PhoneOffIcon as VanillaPhoneOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PhoneOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPhoneOffIcon>
> = /*@__PURE__*/ build<VanillaPhoneOffIcon, SvgProperties>(VanillaPhoneOffIcon)
export const PhoneOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPhoneOffIcon>
> = PhoneOffIcon
    