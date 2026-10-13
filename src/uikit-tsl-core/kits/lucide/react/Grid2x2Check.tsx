
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Grid2x2CheckIcon as VanillaGrid2x2CheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Grid2x2CheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGrid2x2CheckIcon>
> = /*@__PURE__*/ build<VanillaGrid2x2CheckIcon, SvgProperties>(VanillaGrid2x2CheckIcon)
export const Grid2x2Check: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGrid2x2CheckIcon>
> = Grid2x2CheckIcon
    