
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AmpersandsIcon as VanillaAmpersandsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AmpersandsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAmpersandsIcon>
> = /*@__PURE__*/ build<VanillaAmpersandsIcon, SvgProperties>(VanillaAmpersandsIcon)
export const Ampersands: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAmpersandsIcon>
> = AmpersandsIcon
    