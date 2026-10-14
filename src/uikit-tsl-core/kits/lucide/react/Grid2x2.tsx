
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Grid2x2Icon as VanillaGrid2x2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Grid2x2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGrid2x2Icon>
> = /*@__PURE__*/ build<VanillaGrid2x2Icon, SvgProperties>(VanillaGrid2x2Icon, "VanillaGrid2x2Icon")
export const Grid2x2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGrid2x2Icon>
> = Grid2x2Icon
    