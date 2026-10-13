
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AlignEndHorizontalIcon as VanillaAlignEndHorizontalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AlignEndHorizontalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlignEndHorizontalIcon>
> = /*@__PURE__*/ build<VanillaAlignEndHorizontalIcon, SvgProperties>(VanillaAlignEndHorizontalIcon)
export const AlignEndHorizontal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlignEndHorizontalIcon>
> = AlignEndHorizontalIcon
    