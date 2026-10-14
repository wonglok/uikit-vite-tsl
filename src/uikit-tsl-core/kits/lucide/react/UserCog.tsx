
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UserCogIcon as VanillaUserCogIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UserCogIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserCogIcon>
> = /*@__PURE__*/ build<VanillaUserCogIcon, SvgProperties>(VanillaUserCogIcon, "VanillaUserCogIcon")
export const UserCog: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserCogIcon>
> = UserCogIcon
    