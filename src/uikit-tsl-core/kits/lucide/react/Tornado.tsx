
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TornadoIcon as VanillaTornadoIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TornadoIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTornadoIcon>
> = /*@__PURE__*/ build<VanillaTornadoIcon, SvgProperties>(VanillaTornadoIcon)
export const Tornado: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTornadoIcon>
> = TornadoIcon
    