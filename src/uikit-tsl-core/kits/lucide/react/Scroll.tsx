
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ScrollIcon as VanillaScrollIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ScrollIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScrollIcon>
> = /*@__PURE__*/ build<VanillaScrollIcon, SvgProperties>(VanillaScrollIcon, "VanillaScrollIcon")
export const Scroll: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScrollIcon>
> = ScrollIcon
    