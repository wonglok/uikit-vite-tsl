
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RulerIcon as VanillaRulerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RulerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRulerIcon>
> = /*@__PURE__*/ build<VanillaRulerIcon, SvgProperties>(VanillaRulerIcon, "VanillaRulerIcon")
export const Ruler: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRulerIcon>
> = RulerIcon
    