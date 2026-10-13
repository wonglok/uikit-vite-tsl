
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AlignEndVerticalIcon as VanillaAlignEndVerticalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AlignEndVerticalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlignEndVerticalIcon>
> = /*@__PURE__*/ build<VanillaAlignEndVerticalIcon, SvgProperties>(VanillaAlignEndVerticalIcon)
export const AlignEndVertical: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlignEndVerticalIcon>
> = AlignEndVerticalIcon
    