
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareMenuIcon as VanillaSquareMenuIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareMenuIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareMenuIcon>
> = /*@__PURE__*/ build<VanillaSquareMenuIcon, SvgProperties>(VanillaSquareMenuIcon, "VanillaSquareMenuIcon")
export const SquareMenu: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareMenuIcon>
> = SquareMenuIcon
    