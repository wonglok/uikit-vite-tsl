
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SoupIcon as VanillaSoupIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SoupIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSoupIcon>
> = /*@__PURE__*/ build<VanillaSoupIcon, SvgProperties>(VanillaSoupIcon, "VanillaSoupIcon")
export const Soup: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSoupIcon>
> = SoupIcon
    