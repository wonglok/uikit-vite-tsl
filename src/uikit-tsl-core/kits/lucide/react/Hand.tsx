
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HandIcon as VanillaHandIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HandIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHandIcon>
> = /*@__PURE__*/ build<VanillaHandIcon, SvgProperties>(VanillaHandIcon, "VanillaHandIcon")
export const Hand: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHandIcon>
> = HandIcon
    