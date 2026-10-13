
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { OctagonXIcon as VanillaOctagonXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const OctagonXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaOctagonXIcon>
> = /*@__PURE__*/ build<VanillaOctagonXIcon, SvgProperties>(VanillaOctagonXIcon)
export const OctagonX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaOctagonXIcon>
> = OctagonXIcon
    