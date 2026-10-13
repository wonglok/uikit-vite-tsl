
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SuperscriptIcon as VanillaSuperscriptIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SuperscriptIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSuperscriptIcon>
> = /*@__PURE__*/ build<VanillaSuperscriptIcon, SvgProperties>(VanillaSuperscriptIcon)
export const Superscript: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSuperscriptIcon>
> = SuperscriptIcon
    