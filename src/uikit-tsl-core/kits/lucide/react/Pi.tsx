
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PiIcon as VanillaPiIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PiIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPiIcon>
> = /*@__PURE__*/ build<VanillaPiIcon, SvgProperties>(VanillaPiIcon)
export const Pi: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPiIcon>
> = PiIcon
    