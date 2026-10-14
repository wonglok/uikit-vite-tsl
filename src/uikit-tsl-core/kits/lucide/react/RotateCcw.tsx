
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RotateCcwIcon as VanillaRotateCcwIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RotateCcwIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRotateCcwIcon>
> = /*@__PURE__*/ build<VanillaRotateCcwIcon, SvgProperties>(VanillaRotateCcwIcon, "VanillaRotateCcwIcon")
export const RotateCcw: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRotateCcwIcon>
> = RotateCcwIcon
    