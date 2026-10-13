
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PenLineIcon as VanillaPenLineIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PenLineIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPenLineIcon>
> = /*@__PURE__*/ build<VanillaPenLineIcon, SvgProperties>(VanillaPenLineIcon)
export const PenLine: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPenLineIcon>
> = PenLineIcon
    