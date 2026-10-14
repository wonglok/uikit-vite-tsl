
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GuitarIcon as VanillaGuitarIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GuitarIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGuitarIcon>
> = /*@__PURE__*/ build<VanillaGuitarIcon, SvgProperties>(VanillaGuitarIcon, "VanillaGuitarIcon")
export const Guitar: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGuitarIcon>
> = GuitarIcon
    