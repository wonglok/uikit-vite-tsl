
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UserRoundCogIcon as VanillaUserRoundCogIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UserRoundCogIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserRoundCogIcon>
> = /*@__PURE__*/ build<VanillaUserRoundCogIcon, SvgProperties>(VanillaUserRoundCogIcon)
export const UserRoundCog: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserRoundCogIcon>
> = UserRoundCogIcon
    