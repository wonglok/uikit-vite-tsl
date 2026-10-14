
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LocationEditIcon as VanillaLocationEditIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LocationEditIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLocationEditIcon>
> = /*@__PURE__*/ build<VanillaLocationEditIcon, SvgProperties>(VanillaLocationEditIcon, "VanillaLocationEditIcon")
export const LocationEdit: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLocationEditIcon>
> = LocationEditIcon
    