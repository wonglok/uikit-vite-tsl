
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UserCheckIcon as VanillaUserCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UserCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserCheckIcon>
> = /*@__PURE__*/ build<VanillaUserCheckIcon, SvgProperties>(VanillaUserCheckIcon, "VanillaUserCheckIcon")
export const UserCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserCheckIcon>
> = UserCheckIcon
    