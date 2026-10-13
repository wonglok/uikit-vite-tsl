
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SprayCanIcon as VanillaSprayCanIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SprayCanIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSprayCanIcon>
> = /*@__PURE__*/ build<VanillaSprayCanIcon, SvgProperties>(VanillaSprayCanIcon)
export const SprayCan: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSprayCanIcon>
> = SprayCanIcon
    