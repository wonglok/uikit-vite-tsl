
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ThumbsDownIcon as VanillaThumbsDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ThumbsDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaThumbsDownIcon>
> = /*@__PURE__*/ build<VanillaThumbsDownIcon, SvgProperties>(VanillaThumbsDownIcon)
export const ThumbsDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaThumbsDownIcon>
> = ThumbsDownIcon
    