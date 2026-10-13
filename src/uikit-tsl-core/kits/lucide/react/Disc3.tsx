
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Disc3Icon as VanillaDisc3Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Disc3Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDisc3Icon>
> = /*@__PURE__*/ build<VanillaDisc3Icon, SvgProperties>(VanillaDisc3Icon)
export const Disc3: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDisc3Icon>
> = Disc3Icon
    