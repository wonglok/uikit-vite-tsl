
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Clock6Icon as VanillaClock6Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Clock6Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock6Icon>
> = /*@__PURE__*/ build<VanillaClock6Icon, SvgProperties>(VanillaClock6Icon, "VanillaClock6Icon")
export const Clock6: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock6Icon>
> = Clock6Icon
    