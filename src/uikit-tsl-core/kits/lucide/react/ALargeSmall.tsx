
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ALargeSmallIcon as VanillaALargeSmallIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ALargeSmallIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaALargeSmallIcon>
> = /*@__PURE__*/ build<VanillaALargeSmallIcon, SvgProperties>(VanillaALargeSmallIcon, "VanillaALargeSmallIcon")
export const ALargeSmall: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaALargeSmallIcon>
> = ALargeSmallIcon
    