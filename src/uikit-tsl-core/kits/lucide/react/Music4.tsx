
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Music4Icon as VanillaMusic4Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Music4Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMusic4Icon>
> = /*@__PURE__*/ build<VanillaMusic4Icon, SvgProperties>(VanillaMusic4Icon, "VanillaMusic4Icon")
export const Music4: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMusic4Icon>
> = Music4Icon
    