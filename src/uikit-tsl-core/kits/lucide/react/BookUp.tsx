
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookUpIcon as VanillaBookUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookUpIcon>
> = /*@__PURE__*/ build<VanillaBookUpIcon, SvgProperties>(VanillaBookUpIcon)
export const BookUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookUpIcon>
> = BookUpIcon
    