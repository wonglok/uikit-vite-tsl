
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookmarkPlusIcon as VanillaBookmarkPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookmarkPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookmarkPlusIcon>
> = /*@__PURE__*/ build<VanillaBookmarkPlusIcon, SvgProperties>(VanillaBookmarkPlusIcon, "VanillaBookmarkPlusIcon")
export const BookmarkPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookmarkPlusIcon>
> = BookmarkPlusIcon
    