
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AmbulanceIcon as VanillaAmbulanceIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AmbulanceIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAmbulanceIcon>
> = /*@__PURE__*/ build<VanillaAmbulanceIcon, SvgProperties>(VanillaAmbulanceIcon, "VanillaAmbulanceIcon")
export const Ambulance: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAmbulanceIcon>
> = AmbulanceIcon
    