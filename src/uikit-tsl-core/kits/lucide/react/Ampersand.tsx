
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AmpersandIcon as VanillaAmpersandIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AmpersandIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAmpersandIcon>
> = /*@__PURE__*/ build<VanillaAmpersandIcon, SvgProperties>(VanillaAmpersandIcon, "VanillaAmpersandIcon")
export const Ampersand: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAmpersandIcon>
> = AmpersandIcon
    