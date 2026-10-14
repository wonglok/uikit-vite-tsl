
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CrossIcon as VanillaCrossIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CrossIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCrossIcon>
> = /*@__PURE__*/ build<VanillaCrossIcon, SvgProperties>(VanillaCrossIcon, "VanillaCrossIcon")
export const Cross: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCrossIcon>
> = CrossIcon
    