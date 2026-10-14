
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { VariableIcon as VanillaVariableIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const VariableIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVariableIcon>
> = /*@__PURE__*/ build<VanillaVariableIcon, SvgProperties>(VanillaVariableIcon, "VanillaVariableIcon")
export const Variable: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVariableIcon>
> = VariableIcon
    