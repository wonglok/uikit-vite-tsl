
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MousePointerIcon as VanillaMousePointerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MousePointerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMousePointerIcon>
> = /*@__PURE__*/ build<VanillaMousePointerIcon, SvgProperties>(VanillaMousePointerIcon, "VanillaMousePointerIcon")
export const MousePointer: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMousePointerIcon>
> = MousePointerIcon
    