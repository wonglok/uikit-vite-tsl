
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TentIcon as VanillaTentIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TentIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTentIcon>
> = /*@__PURE__*/ build<VanillaTentIcon, SvgProperties>(VanillaTentIcon, "VanillaTentIcon")
export const Tent: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTentIcon>
> = TentIcon
    