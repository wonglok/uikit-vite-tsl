
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AlignCenterIcon as VanillaAlignCenterIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AlignCenterIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlignCenterIcon>
> = /*@__PURE__*/ build<VanillaAlignCenterIcon, SvgProperties>(VanillaAlignCenterIcon)
export const AlignCenter: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlignCenterIcon>
> = AlignCenterIcon
    