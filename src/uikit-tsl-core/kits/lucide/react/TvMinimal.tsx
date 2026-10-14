
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TvMinimalIcon as VanillaTvMinimalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TvMinimalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTvMinimalIcon>
> = /*@__PURE__*/ build<VanillaTvMinimalIcon, SvgProperties>(VanillaTvMinimalIcon, "VanillaTvMinimalIcon")
export const TvMinimal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTvMinimalIcon>
> = TvMinimalIcon
    