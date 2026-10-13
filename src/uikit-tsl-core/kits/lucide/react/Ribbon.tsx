
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RibbonIcon as VanillaRibbonIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RibbonIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRibbonIcon>
> = /*@__PURE__*/ build<VanillaRibbonIcon, SvgProperties>(VanillaRibbonIcon)
export const Ribbon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRibbonIcon>
> = RibbonIcon
    