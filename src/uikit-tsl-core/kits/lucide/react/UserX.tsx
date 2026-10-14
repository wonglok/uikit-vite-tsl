
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UserXIcon as VanillaUserXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UserXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserXIcon>
> = /*@__PURE__*/ build<VanillaUserXIcon, SvgProperties>(VanillaUserXIcon, "VanillaUserXIcon")
export const UserX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserXIcon>
> = UserXIcon
    