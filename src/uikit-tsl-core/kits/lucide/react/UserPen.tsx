
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UserPenIcon as VanillaUserPenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UserPenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserPenIcon>
> = /*@__PURE__*/ build<VanillaUserPenIcon, SvgProperties>(VanillaUserPenIcon)
export const UserPen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserPenIcon>
> = UserPenIcon
    