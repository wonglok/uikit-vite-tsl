
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareFunctionIcon as VanillaSquareFunctionIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareFunctionIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareFunctionIcon>
> = /*@__PURE__*/ build<VanillaSquareFunctionIcon, SvgProperties>(VanillaSquareFunctionIcon)
export const SquareFunction: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareFunctionIcon>
> = SquareFunctionIcon
    