
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UserRoundXIcon as VanillaUserRoundXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UserRoundXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserRoundXIcon>
> = /*@__PURE__*/ build<VanillaUserRoundXIcon, SvgProperties>(VanillaUserRoundXIcon)
export const UserRoundX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserRoundXIcon>
> = UserRoundXIcon
    