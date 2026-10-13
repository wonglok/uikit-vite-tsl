
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Clock3Icon as VanillaClock3Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Clock3Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock3Icon>
> = /*@__PURE__*/ build<VanillaClock3Icon, SvgProperties>(VanillaClock3Icon)
export const Clock3: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClock3Icon>
> = Clock3Icon
    