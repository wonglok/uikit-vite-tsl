
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Grid2x2PlusIcon as VanillaGrid2x2PlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Grid2x2PlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGrid2x2PlusIcon>
> = /*@__PURE__*/ build<VanillaGrid2x2PlusIcon, SvgProperties>(VanillaGrid2x2PlusIcon, "VanillaGrid2x2PlusIcon")
export const Grid2x2Plus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGrid2x2PlusIcon>
> = Grid2x2PlusIcon
    