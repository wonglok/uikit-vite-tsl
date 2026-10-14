
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BubblesIcon as VanillaBubblesIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BubblesIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBubblesIcon>
> = /*@__PURE__*/ build<VanillaBubblesIcon, SvgProperties>(VanillaBubblesIcon, "VanillaBubblesIcon")
export const Bubbles: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBubblesIcon>
> = BubblesIcon
    