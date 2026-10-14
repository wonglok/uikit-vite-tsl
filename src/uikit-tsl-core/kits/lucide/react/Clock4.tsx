
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Clock4Icon as VanillaClock4Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Clock4Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock4Icon>
> = /*@__PURE__*/ build<VanillaClock4Icon, SvgProperties>(VanillaClock4Icon, "VanillaClock4Icon")
export const Clock4: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock4Icon>
> = Clock4Icon
    