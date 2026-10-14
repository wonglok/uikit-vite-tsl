
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UserRoundIcon as VanillaUserRoundIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UserRoundIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserRoundIcon>
> = /*@__PURE__*/ build<VanillaUserRoundIcon, SvgProperties>(VanillaUserRoundIcon, "VanillaUserRoundIcon")
export const UserRound: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserRoundIcon>
> = UserRoundIcon
    