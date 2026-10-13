
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UnfoldHorizontalIcon as VanillaUnfoldHorizontalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UnfoldHorizontalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUnfoldHorizontalIcon>
> = /*@__PURE__*/ build<VanillaUnfoldHorizontalIcon, SvgProperties>(VanillaUnfoldHorizontalIcon)
export const UnfoldHorizontal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUnfoldHorizontalIcon>
> = UnfoldHorizontalIcon
    