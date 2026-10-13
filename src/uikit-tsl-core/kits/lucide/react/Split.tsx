
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SplitIcon as VanillaSplitIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SplitIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSplitIcon>
> = /*@__PURE__*/ build<VanillaSplitIcon, SvgProperties>(VanillaSplitIcon)
export const Split: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSplitIcon>
> = SplitIcon
    