
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { OctagonMinusIcon as VanillaOctagonMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const OctagonMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaOctagonMinusIcon>
> = /*@__PURE__*/ build<VanillaOctagonMinusIcon, SvgProperties>(VanillaOctagonMinusIcon, "VanillaOctagonMinusIcon")
export const OctagonMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaOctagonMinusIcon>
> = OctagonMinusIcon
    