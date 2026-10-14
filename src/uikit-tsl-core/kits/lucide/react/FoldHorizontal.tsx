
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FoldHorizontalIcon as VanillaFoldHorizontalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FoldHorizontalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFoldHorizontalIcon>
> = /*@__PURE__*/ build<VanillaFoldHorizontalIcon, SvgProperties>(VanillaFoldHorizontalIcon, "VanillaFoldHorizontalIcon")
export const FoldHorizontal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFoldHorizontalIcon>
> = FoldHorizontalIcon
    