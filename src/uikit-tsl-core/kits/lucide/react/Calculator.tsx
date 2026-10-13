
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CalculatorIcon as VanillaCalculatorIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CalculatorIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalculatorIcon>
> = /*@__PURE__*/ build<VanillaCalculatorIcon, SvgProperties>(VanillaCalculatorIcon)
export const Calculator: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalculatorIcon>
> = CalculatorIcon
    