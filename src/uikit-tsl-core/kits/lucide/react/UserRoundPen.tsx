
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UserRoundPenIcon as VanillaUserRoundPenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UserRoundPenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserRoundPenIcon>
> = /*@__PURE__*/ build<VanillaUserRoundPenIcon, SvgProperties>(VanillaUserRoundPenIcon, "VanillaUserRoundPenIcon")
export const UserRoundPen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserRoundPenIcon>
> = UserRoundPenIcon
    