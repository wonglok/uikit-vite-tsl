
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HospitalIcon as VanillaHospitalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HospitalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHospitalIcon>
> = /*@__PURE__*/ build<VanillaHospitalIcon, SvgProperties>(VanillaHospitalIcon)
export const Hospital: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHospitalIcon>
> = HospitalIcon
    