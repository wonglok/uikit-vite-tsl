
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Clock8Icon as VanillaClock8Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Clock8Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock8Icon>
> = /*@__PURE__*/ build<VanillaClock8Icon, SvgProperties>(VanillaClock8Icon, "VanillaClock8Icon")
export const Clock8: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock8Icon>
> = Clock8Icon
    