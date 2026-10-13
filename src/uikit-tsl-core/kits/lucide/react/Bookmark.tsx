
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookmarkIcon as VanillaBookmarkIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookmarkIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookmarkIcon>
> = /*@__PURE__*/ build<VanillaBookmarkIcon, SvgProperties>(VanillaBookmarkIcon)
export const Bookmark: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookmarkIcon>
> = BookmarkIcon
    