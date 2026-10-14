
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WormIcon as VanillaWormIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WormIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWormIcon>
> = /*@__PURE__*/ build<VanillaWormIcon, SvgProperties>(VanillaWormIcon, "VanillaWormIcon")
export const Worm: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWormIcon>
> = WormIcon
    