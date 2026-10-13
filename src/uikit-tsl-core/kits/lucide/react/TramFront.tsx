
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TramFrontIcon as VanillaTramFrontIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TramFrontIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTramFrontIcon>
> = /*@__PURE__*/ build<VanillaTramFrontIcon, SvgProperties>(VanillaTramFrontIcon)
export const TramFront: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTramFrontIcon>
> = TramFrontIcon
    