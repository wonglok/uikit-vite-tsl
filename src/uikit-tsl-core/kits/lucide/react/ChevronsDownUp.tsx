
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChevronsDownUpIcon as VanillaChevronsDownUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChevronsDownUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronsDownUpIcon>
> = /*@__PURE__*/ build<VanillaChevronsDownUpIcon, SvgProperties>(VanillaChevronsDownUpIcon)
export const ChevronsDownUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronsDownUpIcon>
> = ChevronsDownUpIcon
    