
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { OptionIcon as VanillaOptionIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const OptionIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaOptionIcon>
> = /*@__PURE__*/ build<VanillaOptionIcon, SvgProperties>(VanillaOptionIcon, "VanillaOptionIcon")
export const Option: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaOptionIcon>
> = OptionIcon
    