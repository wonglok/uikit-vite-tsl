
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { YoutubeIcon as VanillaYoutubeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const YoutubeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaYoutubeIcon>
> = /*@__PURE__*/ build<VanillaYoutubeIcon, SvgProperties>(VanillaYoutubeIcon)
export const Youtube: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaYoutubeIcon>
> = YoutubeIcon
    