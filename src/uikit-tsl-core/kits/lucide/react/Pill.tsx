
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PillIcon as VanillaPillIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PillIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPillIcon>
> = /*@__PURE__*/ build<VanillaPillIcon, SvgProperties>(VanillaPillIcon)
export const Pill: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPillIcon>
> = PillIcon
    