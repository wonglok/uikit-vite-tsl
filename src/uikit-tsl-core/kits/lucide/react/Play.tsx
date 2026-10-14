
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PlayIcon as VanillaPlayIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PlayIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPlayIcon>
> = /*@__PURE__*/ build<VanillaPlayIcon, SvgProperties>(VanillaPlayIcon, "VanillaPlayIcon")
export const Play: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPlayIcon>
> = PlayIcon
    