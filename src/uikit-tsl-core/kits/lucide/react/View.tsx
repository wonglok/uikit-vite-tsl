
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ViewIcon as VanillaViewIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ViewIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaViewIcon>
> = /*@__PURE__*/ build<VanillaViewIcon, SvgProperties>(VanillaViewIcon)
export const View: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaViewIcon>
> = ViewIcon
    