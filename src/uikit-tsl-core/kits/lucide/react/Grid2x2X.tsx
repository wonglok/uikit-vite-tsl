
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Grid2x2XIcon as VanillaGrid2x2XIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Grid2x2XIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGrid2x2XIcon>
> = /*@__PURE__*/ build<VanillaGrid2x2XIcon, SvgProperties>(VanillaGrid2x2XIcon)
export const Grid2x2X: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGrid2x2XIcon>
> = Grid2x2XIcon
    