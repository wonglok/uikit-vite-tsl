
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareActivityIcon as VanillaSquareActivityIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareActivityIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareActivityIcon>
> = /*@__PURE__*/ build<VanillaSquareActivityIcon, SvgProperties>(VanillaSquareActivityIcon, "VanillaSquareActivityIcon")
export const SquareActivity: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareActivityIcon>
> = SquareActivityIcon
    