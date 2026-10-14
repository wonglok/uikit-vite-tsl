
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Grid3x3Icon as VanillaGrid3x3Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Grid3x3Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGrid3x3Icon>
> = /*@__PURE__*/ build<VanillaGrid3x3Icon, SvgProperties>(VanillaGrid3x3Icon, "VanillaGrid3x3Icon")
export const Grid3x3: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGrid3x3Icon>
> = Grid3x3Icon
    