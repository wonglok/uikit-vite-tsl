
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ScissorsIcon as VanillaScissorsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ScissorsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScissorsIcon>
> = /*@__PURE__*/ build<VanillaScissorsIcon, SvgProperties>(VanillaScissorsIcon)
export const Scissors: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScissorsIcon>
> = ScissorsIcon
    