
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookIcon as VanillaBookIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookIcon>
> = /*@__PURE__*/ build<VanillaBookIcon, SvgProperties>(VanillaBookIcon, "VanillaBookIcon")
export const Book: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookIcon>
> = BookIcon
    