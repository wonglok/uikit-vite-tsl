
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SwatchBookIcon as VanillaSwatchBookIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SwatchBookIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSwatchBookIcon>
> = /*@__PURE__*/ build<VanillaSwatchBookIcon, SvgProperties>(VanillaSwatchBookIcon, "VanillaSwatchBookIcon")
export const SwatchBook: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSwatchBookIcon>
> = SwatchBookIcon
    