
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Clock10Icon as VanillaClock10Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Clock10Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock10Icon>
> = /*@__PURE__*/ build<VanillaClock10Icon, SvgProperties>(VanillaClock10Icon)
export const Clock10: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock10Icon>
> = Clock10Icon
    