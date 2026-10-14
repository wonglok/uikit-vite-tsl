
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GripVerticalIcon as VanillaGripVerticalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GripVerticalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGripVerticalIcon>
> = /*@__PURE__*/ build<VanillaGripVerticalIcon, SvgProperties>(VanillaGripVerticalIcon, "VanillaGripVerticalIcon")
export const GripVertical: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGripVerticalIcon>
> = GripVerticalIcon
    