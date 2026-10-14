
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AlignRightIcon as VanillaAlignRightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AlignRightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlignRightIcon>
> = /*@__PURE__*/ build<VanillaAlignRightIcon, SvgProperties>(VanillaAlignRightIcon, "VanillaAlignRightIcon")
export const AlignRight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlignRightIcon>
> = AlignRightIcon
    