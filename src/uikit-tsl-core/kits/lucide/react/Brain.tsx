
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BrainIcon as VanillaBrainIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BrainIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBrainIcon>
> = /*@__PURE__*/ build<VanillaBrainIcon, SvgProperties>(VanillaBrainIcon, "VanillaBrainIcon")
export const Brain: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBrainIcon>
> = BrainIcon
    