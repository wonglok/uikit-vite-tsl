
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UsersRoundIcon as VanillaUsersRoundIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UsersRoundIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUsersRoundIcon>
> = /*@__PURE__*/ build<VanillaUsersRoundIcon, SvgProperties>(VanillaUsersRoundIcon)
export const UsersRound: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUsersRoundIcon>
> = UsersRoundIcon
    