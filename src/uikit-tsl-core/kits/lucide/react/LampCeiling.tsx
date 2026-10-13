
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LampCeilingIcon as VanillaLampCeilingIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LampCeilingIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLampCeilingIcon>
> = /*@__PURE__*/ build<VanillaLampCeilingIcon, SvgProperties>(VanillaLampCeilingIcon)
export const LampCeiling: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLampCeilingIcon>
> = LampCeilingIcon
    