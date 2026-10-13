
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UserRoundCheckIcon as VanillaUserRoundCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UserRoundCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserRoundCheckIcon>
> = /*@__PURE__*/ build<VanillaUserRoundCheckIcon, SvgProperties>(VanillaUserRoundCheckIcon)
export const UserRoundCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserRoundCheckIcon>
> = UserRoundCheckIcon
    