
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RectangleHorizontalIcon as VanillaRectangleHorizontalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RectangleHorizontalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRectangleHorizontalIcon>
> = /*@__PURE__*/ build<VanillaRectangleHorizontalIcon, SvgProperties>(VanillaRectangleHorizontalIcon, "VanillaRectangleHorizontalIcon")
export const RectangleHorizontal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRectangleHorizontalIcon>
> = RectangleHorizontalIcon
    