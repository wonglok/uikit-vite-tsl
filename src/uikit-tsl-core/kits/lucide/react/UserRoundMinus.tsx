
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UserRoundMinusIcon as VanillaUserRoundMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UserRoundMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserRoundMinusIcon>
> = /*@__PURE__*/ build<VanillaUserRoundMinusIcon, SvgProperties>(VanillaUserRoundMinusIcon)
export const UserRoundMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserRoundMinusIcon>
> = UserRoundMinusIcon
    