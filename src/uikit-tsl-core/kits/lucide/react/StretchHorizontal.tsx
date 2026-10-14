
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { StretchHorizontalIcon as VanillaStretchHorizontalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const StretchHorizontalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStretchHorizontalIcon>
> = /*@__PURE__*/ build<VanillaStretchHorizontalIcon, SvgProperties>(VanillaStretchHorizontalIcon, "VanillaStretchHorizontalIcon")
export const StretchHorizontal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStretchHorizontalIcon>
> = StretchHorizontalIcon
    