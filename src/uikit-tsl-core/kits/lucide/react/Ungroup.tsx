
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UngroupIcon as VanillaUngroupIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UngroupIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUngroupIcon>
> = /*@__PURE__*/ build<VanillaUngroupIcon, SvgProperties>(VanillaUngroupIcon)
export const Ungroup: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUngroupIcon>
> = UngroupIcon
    