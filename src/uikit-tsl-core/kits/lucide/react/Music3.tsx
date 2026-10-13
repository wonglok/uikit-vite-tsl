
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Music3Icon as VanillaMusic3Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Music3Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMusic3Icon>
> = /*@__PURE__*/ build<VanillaMusic3Icon, SvgProperties>(VanillaMusic3Icon)
export const Music3: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMusic3Icon>
> = Music3Icon
    