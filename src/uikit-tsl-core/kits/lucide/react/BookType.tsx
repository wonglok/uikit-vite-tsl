
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookTypeIcon as VanillaBookTypeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookTypeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookTypeIcon>
> = /*@__PURE__*/ build<VanillaBookTypeIcon, SvgProperties>(VanillaBookTypeIcon, "VanillaBookTypeIcon")
export const BookType: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookTypeIcon>
> = BookTypeIcon
    