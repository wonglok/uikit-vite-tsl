
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TvIcon as VanillaTvIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TvIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTvIcon>
> = /*@__PURE__*/ build<VanillaTvIcon, SvgProperties>(VanillaTvIcon, "VanillaTvIcon")
export const Tv: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTvIcon>
> = TvIcon
    