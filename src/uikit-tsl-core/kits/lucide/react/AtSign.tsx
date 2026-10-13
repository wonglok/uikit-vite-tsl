
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AtSignIcon as VanillaAtSignIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AtSignIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAtSignIcon>
> = /*@__PURE__*/ build<VanillaAtSignIcon, SvgProperties>(VanillaAtSignIcon)
export const AtSign: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAtSignIcon>
> = AtSignIcon
    