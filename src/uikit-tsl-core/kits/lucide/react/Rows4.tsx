
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Rows4Icon as VanillaRows4Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Rows4Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRows4Icon>
> = /*@__PURE__*/ build<VanillaRows4Icon, SvgProperties>(VanillaRows4Icon)
export const Rows4: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRows4Icon>
> = Rows4Icon
    