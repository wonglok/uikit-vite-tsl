
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookCheckIcon as VanillaBookCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookCheckIcon>
> = /*@__PURE__*/ build<VanillaBookCheckIcon, SvgProperties>(VanillaBookCheckIcon, "VanillaBookCheckIcon")
export const BookCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookCheckIcon>
> = BookCheckIcon
    