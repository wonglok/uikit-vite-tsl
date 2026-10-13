
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Clock1Icon as VanillaClock1Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Clock1Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock1Icon>
> = /*@__PURE__*/ build<VanillaClock1Icon, SvgProperties>(VanillaClock1Icon)
export const Clock1: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock1Icon>
> = Clock1Icon
    