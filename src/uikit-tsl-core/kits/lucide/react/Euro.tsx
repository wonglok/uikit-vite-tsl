
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { EuroIcon as VanillaEuroIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const EuroIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEuroIcon>
> = /*@__PURE__*/ build<VanillaEuroIcon, SvgProperties>(VanillaEuroIcon, "VanillaEuroIcon")
export const Euro: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEuroIcon>
> = EuroIcon
    