
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChevronsRightLeftIcon as VanillaChevronsRightLeftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChevronsRightLeftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronsRightLeftIcon>
> = /*@__PURE__*/ build<VanillaChevronsRightLeftIcon, SvgProperties>(VanillaChevronsRightLeftIcon)
export const ChevronsRightLeft: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronsRightLeftIcon>
> = ChevronsRightLeftIcon
    