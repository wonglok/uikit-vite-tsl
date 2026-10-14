
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookCopyIcon as VanillaBookCopyIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookCopyIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookCopyIcon>
> = /*@__PURE__*/ build<VanillaBookCopyIcon, SvgProperties>(VanillaBookCopyIcon, "VanillaBookCopyIcon")
export const BookCopy: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookCopyIcon>
> = BookCopyIcon
    