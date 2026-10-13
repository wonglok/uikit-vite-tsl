
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ListStartIcon as VanillaListStartIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ListStartIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListStartIcon>
> = /*@__PURE__*/ build<VanillaListStartIcon, SvgProperties>(VanillaListStartIcon)
export const ListStart: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListStartIcon>
> = ListStartIcon
    