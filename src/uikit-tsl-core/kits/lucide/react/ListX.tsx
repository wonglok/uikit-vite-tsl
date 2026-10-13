
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ListXIcon as VanillaListXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ListXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListXIcon>
> = /*@__PURE__*/ build<VanillaListXIcon, SvgProperties>(VanillaListXIcon)
export const ListX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListXIcon>
> = ListXIcon
    