
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PenOffIcon as VanillaPenOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PenOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPenOffIcon>
> = /*@__PURE__*/ build<VanillaPenOffIcon, SvgProperties>(VanillaPenOffIcon)
export const PenOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPenOffIcon>
> = PenOffIcon
    