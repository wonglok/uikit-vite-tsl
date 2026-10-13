
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MicrowaveIcon as VanillaMicrowaveIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MicrowaveIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMicrowaveIcon>
> = /*@__PURE__*/ build<VanillaMicrowaveIcon, SvgProperties>(VanillaMicrowaveIcon)
export const Microwave: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMicrowaveIcon>
> = MicrowaveIcon
    