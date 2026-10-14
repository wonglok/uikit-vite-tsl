
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FeatherIcon as VanillaFeatherIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FeatherIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFeatherIcon>
> = /*@__PURE__*/ build<VanillaFeatherIcon, SvgProperties>(VanillaFeatherIcon, "VanillaFeatherIcon")
export const Feather: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFeatherIcon>
> = FeatherIcon
    