
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PhoneIcon as VanillaPhoneIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PhoneIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPhoneIcon>
> = /*@__PURE__*/ build<VanillaPhoneIcon, SvgProperties>(VanillaPhoneIcon)
export const Phone: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPhoneIcon>
> = PhoneIcon
    