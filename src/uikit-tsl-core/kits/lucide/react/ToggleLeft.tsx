
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ToggleLeftIcon as VanillaToggleLeftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ToggleLeftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaToggleLeftIcon>
> = /*@__PURE__*/ build<VanillaToggleLeftIcon, SvgProperties>(VanillaToggleLeftIcon, "VanillaToggleLeftIcon")
export const ToggleLeft: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaToggleLeftIcon>
> = ToggleLeftIcon
    