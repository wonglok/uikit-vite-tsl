
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WavesLadderIcon as VanillaWavesLadderIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WavesLadderIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWavesLadderIcon>
> = /*@__PURE__*/ build<VanillaWavesLadderIcon, SvgProperties>(VanillaWavesLadderIcon, "VanillaWavesLadderIcon")
export const WavesLadder: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWavesLadderIcon>
> = WavesLadderIcon
    