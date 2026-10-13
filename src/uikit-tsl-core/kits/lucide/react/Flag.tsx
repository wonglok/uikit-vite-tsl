
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FlagIcon as VanillaFlagIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FlagIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlagIcon>
> = /*@__PURE__*/ build<VanillaFlagIcon, SvgProperties>(VanillaFlagIcon)
export const Flag: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlagIcon>
> = FlagIcon
    