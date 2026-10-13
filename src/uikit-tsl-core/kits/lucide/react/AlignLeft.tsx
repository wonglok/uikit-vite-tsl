
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AlignLeftIcon as VanillaAlignLeftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AlignLeftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlignLeftIcon>
> = /*@__PURE__*/ build<VanillaAlignLeftIcon, SvgProperties>(VanillaAlignLeftIcon)
export const AlignLeft: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlignLeftIcon>
> = AlignLeftIcon
    