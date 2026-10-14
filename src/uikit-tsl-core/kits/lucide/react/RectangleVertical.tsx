
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RectangleVerticalIcon as VanillaRectangleVerticalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RectangleVerticalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRectangleVerticalIcon>
> = /*@__PURE__*/ build<VanillaRectangleVerticalIcon, SvgProperties>(VanillaRectangleVerticalIcon, "VanillaRectangleVerticalIcon")
export const RectangleVertical: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRectangleVerticalIcon>
> = RectangleVerticalIcon
    