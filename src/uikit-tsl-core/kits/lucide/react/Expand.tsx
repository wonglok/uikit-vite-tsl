
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ExpandIcon as VanillaExpandIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ExpandIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaExpandIcon>
> = /*@__PURE__*/ build<VanillaExpandIcon, SvgProperties>(VanillaExpandIcon, "VanillaExpandIcon")
export const Expand: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaExpandIcon>
> = ExpandIcon
    