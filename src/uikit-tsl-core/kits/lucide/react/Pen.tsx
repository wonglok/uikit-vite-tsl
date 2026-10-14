
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PenIcon as VanillaPenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPenIcon>
> = /*@__PURE__*/ build<VanillaPenIcon, SvgProperties>(VanillaPenIcon, "VanillaPenIcon")
export const Pen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPenIcon>
> = PenIcon
    