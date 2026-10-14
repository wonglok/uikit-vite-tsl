
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShrinkIcon as VanillaShrinkIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShrinkIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShrinkIcon>
> = /*@__PURE__*/ build<VanillaShrinkIcon, SvgProperties>(VanillaShrinkIcon, "VanillaShrinkIcon")
export const Shrink: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShrinkIcon>
> = ShrinkIcon
    