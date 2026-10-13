
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TagsIcon as VanillaTagsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TagsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTagsIcon>
> = /*@__PURE__*/ build<VanillaTagsIcon, SvgProperties>(VanillaTagsIcon)
export const Tags: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTagsIcon>
> = TagsIcon
    