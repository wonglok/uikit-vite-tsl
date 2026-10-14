
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FactoryIcon as VanillaFactoryIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FactoryIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFactoryIcon>
> = /*@__PURE__*/ build<VanillaFactoryIcon, SvgProperties>(VanillaFactoryIcon, "VanillaFactoryIcon")
export const Factory: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFactoryIcon>
> = FactoryIcon
    