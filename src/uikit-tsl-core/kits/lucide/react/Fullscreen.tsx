
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FullscreenIcon as VanillaFullscreenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FullscreenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFullscreenIcon>
> = /*@__PURE__*/ build<VanillaFullscreenIcon, SvgProperties>(VanillaFullscreenIcon, "VanillaFullscreenIcon")
export const Fullscreen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFullscreenIcon>
> = FullscreenIcon
    