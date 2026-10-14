
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MemoryStickIcon as VanillaMemoryStickIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MemoryStickIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMemoryStickIcon>
> = /*@__PURE__*/ build<VanillaMemoryStickIcon, SvgProperties>(VanillaMemoryStickIcon, "VanillaMemoryStickIcon")
export const MemoryStick: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMemoryStickIcon>
> = MemoryStickIcon
    