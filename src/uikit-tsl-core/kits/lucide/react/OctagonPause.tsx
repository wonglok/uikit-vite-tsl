
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { OctagonPauseIcon as VanillaOctagonPauseIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const OctagonPauseIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaOctagonPauseIcon>
> = /*@__PURE__*/ build<VanillaOctagonPauseIcon, SvgProperties>(VanillaOctagonPauseIcon, "VanillaOctagonPauseIcon")
export const OctagonPause: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaOctagonPauseIcon>
> = OctagonPauseIcon
    