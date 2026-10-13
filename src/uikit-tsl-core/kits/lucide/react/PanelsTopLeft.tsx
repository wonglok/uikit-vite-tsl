
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PanelsTopLeftIcon as VanillaPanelsTopLeftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PanelsTopLeftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelsTopLeftIcon>
> = /*@__PURE__*/ build<VanillaPanelsTopLeftIcon, SvgProperties>(VanillaPanelsTopLeftIcon)
export const PanelsTopLeft: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelsTopLeftIcon>
> = PanelsTopLeftIcon
    