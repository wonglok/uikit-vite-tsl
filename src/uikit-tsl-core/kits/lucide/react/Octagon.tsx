
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { OctagonIcon as VanillaOctagonIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const OctagonIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaOctagonIcon>
> = /*@__PURE__*/ build<VanillaOctagonIcon, SvgProperties>(VanillaOctagonIcon)
export const Octagon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaOctagonIcon>
> = OctagonIcon
    