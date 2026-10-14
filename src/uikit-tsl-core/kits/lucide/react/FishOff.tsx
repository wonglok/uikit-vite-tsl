
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FishOffIcon as VanillaFishOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FishOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFishOffIcon>
> = /*@__PURE__*/ build<VanillaFishOffIcon, SvgProperties>(VanillaFishOffIcon, "VanillaFishOffIcon")
export const FishOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFishOffIcon>
> = FishOffIcon
    