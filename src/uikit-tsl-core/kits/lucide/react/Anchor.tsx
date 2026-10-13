
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AnchorIcon as VanillaAnchorIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AnchorIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAnchorIcon>
> = /*@__PURE__*/ build<VanillaAnchorIcon, SvgProperties>(VanillaAnchorIcon)
export const Anchor: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAnchorIcon>
> = AnchorIcon
    