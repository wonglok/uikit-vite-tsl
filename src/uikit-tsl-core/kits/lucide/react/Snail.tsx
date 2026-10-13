
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SnailIcon as VanillaSnailIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SnailIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSnailIcon>
> = /*@__PURE__*/ build<VanillaSnailIcon, SvgProperties>(VanillaSnailIcon)
export const Snail: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSnailIcon>
> = SnailIcon
    