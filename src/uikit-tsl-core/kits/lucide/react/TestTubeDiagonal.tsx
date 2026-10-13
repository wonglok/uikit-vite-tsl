
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TestTubeDiagonalIcon as VanillaTestTubeDiagonalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TestTubeDiagonalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTestTubeDiagonalIcon>
> = /*@__PURE__*/ build<VanillaTestTubeDiagonalIcon, SvgProperties>(VanillaTestTubeDiagonalIcon)
export const TestTubeDiagonal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTestTubeDiagonalIcon>
> = TestTubeDiagonalIcon
    