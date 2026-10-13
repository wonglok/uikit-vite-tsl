
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { XIcon as VanillaXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const XIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaXIcon>
> = /*@__PURE__*/ build<VanillaXIcon, SvgProperties>(VanillaXIcon)
export const X: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaXIcon>
> = XIcon
    