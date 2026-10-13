
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CombineIcon as VanillaCombineIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CombineIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCombineIcon>
> = /*@__PURE__*/ build<VanillaCombineIcon, SvgProperties>(VanillaCombineIcon)
export const Combine: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCombineIcon>
> = CombineIcon
    