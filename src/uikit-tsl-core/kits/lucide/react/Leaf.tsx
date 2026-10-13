
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LeafIcon as VanillaLeafIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LeafIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLeafIcon>
> = /*@__PURE__*/ build<VanillaLeafIcon, SvgProperties>(VanillaLeafIcon)
export const Leaf: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLeafIcon>
> = LeafIcon
    