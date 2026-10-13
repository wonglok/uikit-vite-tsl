
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ThumbsUpIcon as VanillaThumbsUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ThumbsUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaThumbsUpIcon>
> = /*@__PURE__*/ build<VanillaThumbsUpIcon, SvgProperties>(VanillaThumbsUpIcon)
export const ThumbsUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaThumbsUpIcon>
> = ThumbsUpIcon
    