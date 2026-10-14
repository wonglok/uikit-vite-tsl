
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CakeSliceIcon as VanillaCakeSliceIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CakeSliceIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCakeSliceIcon>
> = /*@__PURE__*/ build<VanillaCakeSliceIcon, SvgProperties>(VanillaCakeSliceIcon, "VanillaCakeSliceIcon")
export const CakeSlice: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCakeSliceIcon>
> = CakeSliceIcon
    