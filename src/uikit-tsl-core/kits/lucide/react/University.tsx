
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UniversityIcon as VanillaUniversityIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UniversityIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUniversityIcon>
> = /*@__PURE__*/ build<VanillaUniversityIcon, SvgProperties>(VanillaUniversityIcon)
export const University: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUniversityIcon>
> = UniversityIcon
    