
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TentTreeIcon as VanillaTentTreeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TentTreeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTentTreeIcon>
> = /*@__PURE__*/ build<VanillaTentTreeIcon, SvgProperties>(VanillaTentTreeIcon, "VanillaTentTreeIcon")
export const TentTree: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTentTreeIcon>
> = TentTreeIcon
    