
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ScrollTextIcon as VanillaScrollTextIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ScrollTextIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScrollTextIcon>
> = /*@__PURE__*/ build<VanillaScrollTextIcon, SvgProperties>(VanillaScrollTextIcon, "VanillaScrollTextIcon")
export const ScrollText: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScrollTextIcon>
> = ScrollTextIcon
    