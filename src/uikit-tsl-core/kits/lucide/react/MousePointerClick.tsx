
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MousePointerClickIcon as VanillaMousePointerClickIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MousePointerClickIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMousePointerClickIcon>
> = /*@__PURE__*/ build<VanillaMousePointerClickIcon, SvgProperties>(VanillaMousePointerClickIcon, "VanillaMousePointerClickIcon")
export const MousePointerClick: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMousePointerClickIcon>
> = MousePointerClickIcon
    