
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { VenetianMaskIcon as VanillaVenetianMaskIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const VenetianMaskIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVenetianMaskIcon>
> = /*@__PURE__*/ build<VanillaVenetianMaskIcon, SvgProperties>(VanillaVenetianMaskIcon, "VanillaVenetianMaskIcon")
export const VenetianMask: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVenetianMaskIcon>
> = VenetianMaskIcon
    