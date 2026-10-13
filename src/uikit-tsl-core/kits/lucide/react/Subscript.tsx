
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SubscriptIcon as VanillaSubscriptIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SubscriptIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSubscriptIcon>
> = /*@__PURE__*/ build<VanillaSubscriptIcon, SvgProperties>(VanillaSubscriptIcon)
export const Subscript: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSubscriptIcon>
> = SubscriptIcon
    