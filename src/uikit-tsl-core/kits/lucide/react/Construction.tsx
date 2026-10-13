
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ConstructionIcon as VanillaConstructionIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ConstructionIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaConstructionIcon>
> = /*@__PURE__*/ build<VanillaConstructionIcon, SvgProperties>(VanillaConstructionIcon)
export const Construction: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaConstructionIcon>
> = ConstructionIcon
    