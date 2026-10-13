
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CpuIcon as VanillaCpuIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CpuIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCpuIcon>
> = /*@__PURE__*/ build<VanillaCpuIcon, SvgProperties>(VanillaCpuIcon)
export const Cpu: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCpuIcon>
> = CpuIcon
    