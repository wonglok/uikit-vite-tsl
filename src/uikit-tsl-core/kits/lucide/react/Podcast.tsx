
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PodcastIcon as VanillaPodcastIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PodcastIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPodcastIcon>
> = /*@__PURE__*/ build<VanillaPodcastIcon, SvgProperties>(VanillaPodcastIcon)
export const Podcast: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPodcastIcon>
> = PodcastIcon
    