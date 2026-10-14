
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GlobeIcon as VanillaGlobeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GlobeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGlobeIcon>
> = /*@__PURE__*/ build<VanillaGlobeIcon, SvgProperties>(VanillaGlobeIcon, "VanillaGlobeIcon")
export const Globe: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGlobeIcon>
> = GlobeIcon
    