
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquarePilcrowIcon as VanillaSquarePilcrowIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquarePilcrowIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquarePilcrowIcon>
> = /*@__PURE__*/ build<VanillaSquarePilcrowIcon, SvgProperties>(VanillaSquarePilcrowIcon)
export const SquarePilcrow: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquarePilcrowIcon>
> = SquarePilcrowIcon
    