
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SkipForwardIcon as VanillaSkipForwardIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SkipForwardIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSkipForwardIcon>
> = /*@__PURE__*/ build<VanillaSkipForwardIcon, SvgProperties>(VanillaSkipForwardIcon, "VanillaSkipForwardIcon")
export const SkipForward: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSkipForwardIcon>
> = SkipForwardIcon
    