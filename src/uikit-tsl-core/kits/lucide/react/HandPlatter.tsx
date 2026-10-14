
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HandPlatterIcon as VanillaHandPlatterIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HandPlatterIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHandPlatterIcon>
> = /*@__PURE__*/ build<VanillaHandPlatterIcon, SvgProperties>(VanillaHandPlatterIcon, "VanillaHandPlatterIcon")
export const HandPlatter: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHandPlatterIcon>
> = HandPlatterIcon
    