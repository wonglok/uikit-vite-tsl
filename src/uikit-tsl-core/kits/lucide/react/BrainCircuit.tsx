
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BrainCircuitIcon as VanillaBrainCircuitIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BrainCircuitIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBrainCircuitIcon>
> = /*@__PURE__*/ build<VanillaBrainCircuitIcon, SvgProperties>(VanillaBrainCircuitIcon)
export const BrainCircuit: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBrainCircuitIcon>
> = BrainCircuitIcon
    