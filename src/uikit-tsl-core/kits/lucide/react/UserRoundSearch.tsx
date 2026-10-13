
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UserRoundSearchIcon as VanillaUserRoundSearchIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UserRoundSearchIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserRoundSearchIcon>
> = /*@__PURE__*/ build<VanillaUserRoundSearchIcon, SvgProperties>(VanillaUserRoundSearchIcon)
export const UserRoundSearch: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserRoundSearchIcon>
> = UserRoundSearchIcon
    