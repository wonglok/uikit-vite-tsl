
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ConciergeBellIcon as VanillaConciergeBellIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ConciergeBellIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaConciergeBellIcon>
> = /*@__PURE__*/ build<VanillaConciergeBellIcon, SvgProperties>(VanillaConciergeBellIcon, "VanillaConciergeBellIcon")
export const ConciergeBell: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaConciergeBellIcon>
> = ConciergeBellIcon
    