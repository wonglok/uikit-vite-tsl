
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GripIcon as VanillaGripIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GripIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGripIcon>
> = /*@__PURE__*/ build<VanillaGripIcon, SvgProperties>(VanillaGripIcon, "VanillaGripIcon")
export const Grip: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGripIcon>
> = GripIcon
    