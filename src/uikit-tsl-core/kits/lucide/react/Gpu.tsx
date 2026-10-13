
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GpuIcon as VanillaGpuIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GpuIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGpuIcon>
> = /*@__PURE__*/ build<VanillaGpuIcon, SvgProperties>(VanillaGpuIcon)
export const Gpu: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGpuIcon>
> = GpuIcon
    