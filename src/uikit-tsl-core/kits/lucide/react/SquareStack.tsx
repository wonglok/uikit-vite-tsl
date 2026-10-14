
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareStackIcon as VanillaSquareStackIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareStackIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareStackIcon>
> = /*@__PURE__*/ build<VanillaSquareStackIcon, SvgProperties>(VanillaSquareStackIcon, "VanillaSquareStackIcon")
export const SquareStack: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareStackIcon>
> = SquareStackIcon
    