
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RectangleGogglesIcon as VanillaRectangleGogglesIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RectangleGogglesIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRectangleGogglesIcon>
> = /*@__PURE__*/ build<VanillaRectangleGogglesIcon, SvgProperties>(VanillaRectangleGogglesIcon)
export const RectangleGoggles: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRectangleGogglesIcon>
> = RectangleGogglesIcon
    