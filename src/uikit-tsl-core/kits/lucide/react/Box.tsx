
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BoxIcon as VanillaBoxIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BoxIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBoxIcon>
> = /*@__PURE__*/ build<VanillaBoxIcon, SvgProperties>(VanillaBoxIcon, "VanillaBoxIcon")
export const Box: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBoxIcon>
> = BoxIcon
    