
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Clock7Icon as VanillaClock7Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Clock7Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock7Icon>
> = /*@__PURE__*/ build<VanillaClock7Icon, SvgProperties>(VanillaClock7Icon, "VanillaClock7Icon")
export const Clock7: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock7Icon>
> = Clock7Icon
    