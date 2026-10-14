
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Clock12Icon as VanillaClock12Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Clock12Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock12Icon>
> = /*@__PURE__*/ build<VanillaClock12Icon, SvgProperties>(VanillaClock12Icon, "VanillaClock12Icon")
export const Clock12: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock12Icon>
> = Clock12Icon
    