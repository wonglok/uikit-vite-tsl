
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Clock11Icon as VanillaClock11Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Clock11Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock11Icon>
> = /*@__PURE__*/ build<VanillaClock11Icon, SvgProperties>(VanillaClock11Icon)
export const Clock11: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock11Icon>
> = Clock11Icon
    