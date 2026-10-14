
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FireExtinguisherIcon as VanillaFireExtinguisherIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FireExtinguisherIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFireExtinguisherIcon>
> = /*@__PURE__*/ build<VanillaFireExtinguisherIcon, SvgProperties>(VanillaFireExtinguisherIcon, "VanillaFireExtinguisherIcon")
export const FireExtinguisher: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFireExtinguisherIcon>
> = FireExtinguisherIcon
    