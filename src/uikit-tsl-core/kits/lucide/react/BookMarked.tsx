
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookMarkedIcon as VanillaBookMarkedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookMarkedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookMarkedIcon>
> = /*@__PURE__*/ build<VanillaBookMarkedIcon, SvgProperties>(VanillaBookMarkedIcon, "VanillaBookMarkedIcon")
export const BookMarked: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookMarkedIcon>
> = BookMarkedIcon
    