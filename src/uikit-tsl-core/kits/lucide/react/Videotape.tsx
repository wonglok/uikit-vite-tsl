
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { VideotapeIcon as VanillaVideotapeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const VideotapeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVideotapeIcon>
> = /*@__PURE__*/ build<VanillaVideotapeIcon, SvgProperties>(VanillaVideotapeIcon, "VanillaVideotapeIcon")
export const Videotape: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVideotapeIcon>
> = VideotapeIcon
    