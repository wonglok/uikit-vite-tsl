
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FlipHorizontalIcon as VanillaFlipHorizontalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FlipHorizontalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlipHorizontalIcon>
> = /*@__PURE__*/ build<VanillaFlipHorizontalIcon, SvgProperties>(VanillaFlipHorizontalIcon)
export const FlipHorizontal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlipHorizontalIcon>
> = FlipHorizontalIcon
    