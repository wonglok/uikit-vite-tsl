
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PaletteIcon as VanillaPaletteIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PaletteIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPaletteIcon>
> = /*@__PURE__*/ build<VanillaPaletteIcon, SvgProperties>(VanillaPaletteIcon)
export const Palette: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPaletteIcon>
> = PaletteIcon
    