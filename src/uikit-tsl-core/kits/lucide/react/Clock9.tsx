
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Clock9Icon as VanillaClock9Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Clock9Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock9Icon>
> = /*@__PURE__*/ build<VanillaClock9Icon, SvgProperties>(VanillaClock9Icon)
export const Clock9: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock9Icon>
> = Clock9Icon
    