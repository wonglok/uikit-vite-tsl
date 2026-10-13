
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { IdCardIcon as VanillaIdCardIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const IdCardIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaIdCardIcon>
> = /*@__PURE__*/ build<VanillaIdCardIcon, SvgProperties>(VanillaIdCardIcon)
export const IdCard: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaIdCardIcon>
> = IdCardIcon
    