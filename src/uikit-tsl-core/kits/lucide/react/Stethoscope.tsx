
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { StethoscopeIcon as VanillaStethoscopeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const StethoscopeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStethoscopeIcon>
> = /*@__PURE__*/ build<VanillaStethoscopeIcon, SvgProperties>(VanillaStethoscopeIcon)
export const Stethoscope: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStethoscopeIcon>
> = StethoscopeIcon
    