
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { InfinityIcon as VanillaInfinityIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const InfinityIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaInfinityIcon>
> = /*@__PURE__*/ build<VanillaInfinityIcon, SvgProperties>(VanillaInfinityIcon, "VanillaInfinityIcon")
export const Infinity: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaInfinityIcon>
> = InfinityIcon
    