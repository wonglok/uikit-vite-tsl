
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ListCheckIcon as VanillaListCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ListCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListCheckIcon>
> = /*@__PURE__*/ build<VanillaListCheckIcon, SvgProperties>(VanillaListCheckIcon)
export const ListCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListCheckIcon>
> = ListCheckIcon
    