
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CornerLeftUpIcon as VanillaCornerLeftUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CornerLeftUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCornerLeftUpIcon>
> = /*@__PURE__*/ build<VanillaCornerLeftUpIcon, SvgProperties>(VanillaCornerLeftUpIcon)
export const CornerLeftUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCornerLeftUpIcon>
> = CornerLeftUpIcon
    