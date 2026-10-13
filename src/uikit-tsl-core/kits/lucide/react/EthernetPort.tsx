
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { EthernetPortIcon as VanillaEthernetPortIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const EthernetPortIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEthernetPortIcon>
> = /*@__PURE__*/ build<VanillaEthernetPortIcon, SvgProperties>(VanillaEthernetPortIcon)
export const EthernetPort: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEthernetPortIcon>
> = EthernetPortIcon
    