
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AntennaIcon as VanillaAntennaIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AntennaIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAntennaIcon>
> = /*@__PURE__*/ build<VanillaAntennaIcon, SvgProperties>(VanillaAntennaIcon, "VanillaAntennaIcon")
export const Antenna: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAntennaIcon>
> = AntennaIcon
    