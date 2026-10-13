
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GraduationCapIcon as VanillaGraduationCapIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GraduationCapIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGraduationCapIcon>
> = /*@__PURE__*/ build<VanillaGraduationCapIcon, SvgProperties>(VanillaGraduationCapIcon)
export const GraduationCap: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGraduationCapIcon>
> = GraduationCapIcon
    