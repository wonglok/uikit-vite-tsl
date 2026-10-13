
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShrubIcon as VanillaShrubIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShrubIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShrubIcon>
> = /*@__PURE__*/ build<VanillaShrubIcon, SvgProperties>(VanillaShrubIcon)
export const Shrub: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShrubIcon>
> = ShrubIcon
    