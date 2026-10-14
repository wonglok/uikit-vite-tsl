
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { StarOffIcon as VanillaStarOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const StarOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStarOffIcon>
> = /*@__PURE__*/ build<VanillaStarOffIcon, SvgProperties>(VanillaStarOffIcon, "VanillaStarOffIcon")
export const StarOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStarOffIcon>
> = StarOffIcon
    