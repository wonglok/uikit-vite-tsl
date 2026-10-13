
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RssIcon as VanillaRssIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RssIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRssIcon>
> = /*@__PURE__*/ build<VanillaRssIcon, SvgProperties>(VanillaRssIcon)
export const Rss: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRssIcon>
> = RssIcon
    