
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SchoolIcon as VanillaSchoolIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SchoolIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSchoolIcon>
> = /*@__PURE__*/ build<VanillaSchoolIcon, SvgProperties>(VanillaSchoolIcon, "VanillaSchoolIcon")
export const School: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSchoolIcon>
> = SchoolIcon
    