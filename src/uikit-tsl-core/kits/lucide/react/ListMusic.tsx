
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ListMusicIcon as VanillaListMusicIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ListMusicIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListMusicIcon>
> = /*@__PURE__*/ build<VanillaListMusicIcon, SvgProperties>(VanillaListMusicIcon)
export const ListMusic: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListMusicIcon>
> = ListMusicIcon
    