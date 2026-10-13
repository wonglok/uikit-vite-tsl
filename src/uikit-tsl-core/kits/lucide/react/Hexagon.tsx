
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HexagonIcon as VanillaHexagonIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HexagonIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHexagonIcon>
> = /*@__PURE__*/ build<VanillaHexagonIcon, SvgProperties>(VanillaHexagonIcon)
export const Hexagon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHexagonIcon>
> = HexagonIcon
    