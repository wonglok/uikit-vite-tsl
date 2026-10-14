
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FastForwardIcon as VanillaFastForwardIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FastForwardIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFastForwardIcon>
> = /*@__PURE__*/ build<VanillaFastForwardIcon, SvgProperties>(VanillaFastForwardIcon, "VanillaFastForwardIcon")
export const FastForward: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFastForwardIcon>
> = FastForwardIcon
    