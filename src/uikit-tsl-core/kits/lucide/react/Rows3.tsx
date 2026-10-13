
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Rows3Icon as VanillaRows3Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Rows3Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRows3Icon>
> = /*@__PURE__*/ build<VanillaRows3Icon, SvgProperties>(VanillaRows3Icon)
export const Rows3: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRows3Icon>
> = Rows3Icon
    