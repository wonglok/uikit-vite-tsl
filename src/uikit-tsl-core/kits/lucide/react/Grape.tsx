
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GrapeIcon as VanillaGrapeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GrapeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGrapeIcon>
> = /*@__PURE__*/ build<VanillaGrapeIcon, SvgProperties>(VanillaGrapeIcon, "VanillaGrapeIcon")
export const Grape: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGrapeIcon>
> = GrapeIcon
    