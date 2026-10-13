
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FlagOffIcon as VanillaFlagOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FlagOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlagOffIcon>
> = /*@__PURE__*/ build<VanillaFlagOffIcon, SvgProperties>(VanillaFlagOffIcon)
export const FlagOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlagOffIcon>
> = FlagOffIcon
    