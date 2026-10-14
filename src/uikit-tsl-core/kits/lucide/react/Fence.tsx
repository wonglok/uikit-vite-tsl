
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FenceIcon as VanillaFenceIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FenceIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFenceIcon>
> = /*@__PURE__*/ build<VanillaFenceIcon, SvgProperties>(VanillaFenceIcon, "VanillaFenceIcon")
export const Fence: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFenceIcon>
> = FenceIcon
    