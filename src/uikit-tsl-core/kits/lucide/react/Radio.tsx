
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RadioIcon as VanillaRadioIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RadioIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRadioIcon>
> = /*@__PURE__*/ build<VanillaRadioIcon, SvgProperties>(VanillaRadioIcon, "VanillaRadioIcon")
export const Radio: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRadioIcon>
> = RadioIcon
    