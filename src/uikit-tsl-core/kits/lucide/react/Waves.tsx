
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WavesIcon as VanillaWavesIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WavesIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWavesIcon>
> = /*@__PURE__*/ build<VanillaWavesIcon, SvgProperties>(VanillaWavesIcon, "VanillaWavesIcon")
export const Waves: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWavesIcon>
> = WavesIcon
    