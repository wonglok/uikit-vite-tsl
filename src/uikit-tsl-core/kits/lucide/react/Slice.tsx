
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SliceIcon as VanillaSliceIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SliceIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSliceIcon>
> = /*@__PURE__*/ build<VanillaSliceIcon, SvgProperties>(VanillaSliceIcon)
export const Slice: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSliceIcon>
> = SliceIcon
    