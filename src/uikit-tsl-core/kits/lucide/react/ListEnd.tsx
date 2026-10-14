
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ListEndIcon as VanillaListEndIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ListEndIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListEndIcon>
> = /*@__PURE__*/ build<VanillaListEndIcon, SvgProperties>(VanillaListEndIcon, "VanillaListEndIcon")
export const ListEnd: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListEndIcon>
> = ListEndIcon
    