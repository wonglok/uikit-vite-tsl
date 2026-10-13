
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SpadeIcon as VanillaSpadeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SpadeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSpadeIcon>
> = /*@__PURE__*/ build<VanillaSpadeIcon, SvgProperties>(VanillaSpadeIcon)
export const Spade: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSpadeIcon>
> = SpadeIcon
    