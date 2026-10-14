
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TagIcon as VanillaTagIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TagIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTagIcon>
> = /*@__PURE__*/ build<VanillaTagIcon, SvgProperties>(VanillaTagIcon, "VanillaTagIcon")
export const Tag: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTagIcon>
> = TagIcon
    