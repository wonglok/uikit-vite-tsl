
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RussianRubleIcon as VanillaRussianRubleIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RussianRubleIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRussianRubleIcon>
> = /*@__PURE__*/ build<VanillaRussianRubleIcon, SvgProperties>(VanillaRussianRubleIcon, "VanillaRussianRubleIcon")
export const RussianRuble: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRussianRubleIcon>
> = RussianRubleIcon
    