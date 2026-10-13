
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookmarkMinusIcon as VanillaBookmarkMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookmarkMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookmarkMinusIcon>
> = /*@__PURE__*/ build<VanillaBookmarkMinusIcon, SvgProperties>(VanillaBookmarkMinusIcon)
export const BookmarkMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookmarkMinusIcon>
> = BookmarkMinusIcon
    