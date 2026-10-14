
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ToggleRightIcon as VanillaToggleRightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ToggleRightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaToggleRightIcon>
> = /*@__PURE__*/ build<VanillaToggleRightIcon, SvgProperties>(VanillaToggleRightIcon, "VanillaToggleRightIcon")
export const ToggleRight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaToggleRightIcon>
> = ToggleRightIcon
    