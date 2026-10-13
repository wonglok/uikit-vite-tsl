
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PhoneMissedIcon as VanillaPhoneMissedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PhoneMissedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPhoneMissedIcon>
> = /*@__PURE__*/ build<VanillaPhoneMissedIcon, SvgProperties>(VanillaPhoneMissedIcon)
export const PhoneMissed: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPhoneMissedIcon>
> = PhoneMissedIcon
    