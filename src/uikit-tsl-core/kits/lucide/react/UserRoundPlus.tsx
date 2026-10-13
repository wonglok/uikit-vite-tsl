
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UserRoundPlusIcon as VanillaUserRoundPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UserRoundPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserRoundPlusIcon>
> = /*@__PURE__*/ build<VanillaUserRoundPlusIcon, SvgProperties>(VanillaUserRoundPlusIcon)
export const UserRoundPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserRoundPlusIcon>
> = UserRoundPlusIcon
    