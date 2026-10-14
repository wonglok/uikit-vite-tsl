
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PinIcon as VanillaPinIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PinIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPinIcon>
> = /*@__PURE__*/ build<VanillaPinIcon, SvgProperties>(VanillaPinIcon, "VanillaPinIcon")
export const Pin: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPinIcon>
> = PinIcon
    