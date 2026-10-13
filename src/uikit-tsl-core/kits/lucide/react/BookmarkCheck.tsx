
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookmarkCheckIcon as VanillaBookmarkCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookmarkCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookmarkCheckIcon>
> = /*@__PURE__*/ build<VanillaBookmarkCheckIcon, SvgProperties>(VanillaBookmarkCheckIcon)
export const BookmarkCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookmarkCheckIcon>
> = BookmarkCheckIcon
    