
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RailSymbolIcon as VanillaRailSymbolIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RailSymbolIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRailSymbolIcon>
> = /*@__PURE__*/ build<VanillaRailSymbolIcon, SvgProperties>(VanillaRailSymbolIcon)
export const RailSymbol: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRailSymbolIcon>
> = RailSymbolIcon
    