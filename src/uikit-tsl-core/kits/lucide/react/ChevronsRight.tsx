
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChevronsRightIcon as VanillaChevronsRightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChevronsRightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronsRightIcon>
> = /*@__PURE__*/ build<VanillaChevronsRightIcon, SvgProperties>(VanillaChevronsRightIcon)
export const ChevronsRight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronsRightIcon>
> = ChevronsRightIcon
    