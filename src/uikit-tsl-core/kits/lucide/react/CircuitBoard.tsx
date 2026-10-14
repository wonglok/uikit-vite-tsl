
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircuitBoardIcon as VanillaCircuitBoardIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircuitBoardIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircuitBoardIcon>
> = /*@__PURE__*/ build<VanillaCircuitBoardIcon, SvgProperties>(VanillaCircuitBoardIcon, "VanillaCircuitBoardIcon")
export const CircuitBoard: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircuitBoardIcon>
> = CircuitBoardIcon
    