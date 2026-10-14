
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GripHorizontalIcon as VanillaGripHorizontalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GripHorizontalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGripHorizontalIcon>
> = /*@__PURE__*/ build<VanillaGripHorizontalIcon, SvgProperties>(VanillaGripHorizontalIcon, "VanillaGripHorizontalIcon")
export const GripHorizontal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGripHorizontalIcon>
> = GripHorizontalIcon
    