
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MousePointerBanIcon as VanillaMousePointerBanIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MousePointerBanIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMousePointerBanIcon>
> = /*@__PURE__*/ build<VanillaMousePointerBanIcon, SvgProperties>(VanillaMousePointerBanIcon, "VanillaMousePointerBanIcon")
export const MousePointerBan: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMousePointerBanIcon>
> = MousePointerBanIcon
    