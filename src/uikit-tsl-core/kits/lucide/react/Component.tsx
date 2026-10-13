
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ComponentIcon as VanillaComponentIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ComponentIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaComponentIcon>
> = /*@__PURE__*/ build<VanillaComponentIcon, SvgProperties>(VanillaComponentIcon)
export const Component: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaComponentIcon>
> = ComponentIcon
    