
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ApertureIcon as VanillaApertureIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ApertureIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaApertureIcon>
> = /*@__PURE__*/ build<VanillaApertureIcon, SvgProperties>(VanillaApertureIcon, "VanillaApertureIcon")
export const Aperture: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaApertureIcon>
> = ApertureIcon
    