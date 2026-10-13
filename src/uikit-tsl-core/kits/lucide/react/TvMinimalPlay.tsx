
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TvMinimalPlayIcon as VanillaTvMinimalPlayIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TvMinimalPlayIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTvMinimalPlayIcon>
> = /*@__PURE__*/ build<VanillaTvMinimalPlayIcon, SvgProperties>(VanillaTvMinimalPlayIcon)
export const TvMinimalPlay: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTvMinimalPlayIcon>
> = TvMinimalPlayIcon
    