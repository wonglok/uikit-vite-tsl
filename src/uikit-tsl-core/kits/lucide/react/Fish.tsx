
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FishIcon as VanillaFishIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FishIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFishIcon>
> = /*@__PURE__*/ build<VanillaFishIcon, SvgProperties>(VanillaFishIcon, "VanillaFishIcon")
export const Fish: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFishIcon>
> = FishIcon
    