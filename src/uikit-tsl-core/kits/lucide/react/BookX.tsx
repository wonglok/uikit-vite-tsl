
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookXIcon as VanillaBookXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookXIcon>
> = /*@__PURE__*/ build<VanillaBookXIcon, SvgProperties>(VanillaBookXIcon, "VanillaBookXIcon")
export const BookX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookXIcon>
> = BookXIcon
    