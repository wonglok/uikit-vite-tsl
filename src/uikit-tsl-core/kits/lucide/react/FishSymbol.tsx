
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FishSymbolIcon as VanillaFishSymbolIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FishSymbolIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFishSymbolIcon>
> = /*@__PURE__*/ build<VanillaFishSymbolIcon, SvgProperties>(VanillaFishSymbolIcon)
export const FishSymbol: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFishSymbolIcon>
> = FishSymbolIcon
    