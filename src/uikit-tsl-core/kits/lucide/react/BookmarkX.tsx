
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookmarkXIcon as VanillaBookmarkXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookmarkXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookmarkXIcon>
> = /*@__PURE__*/ build<VanillaBookmarkXIcon, SvgProperties>(VanillaBookmarkXIcon)
export const BookmarkX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookmarkXIcon>
> = BookmarkXIcon
    