
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LeafyGreenIcon as VanillaLeafyGreenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LeafyGreenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLeafyGreenIcon>
> = /*@__PURE__*/ build<VanillaLeafyGreenIcon, SvgProperties>(VanillaLeafyGreenIcon, "VanillaLeafyGreenIcon")
export const LeafyGreen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLeafyGreenIcon>
> = LeafyGreenIcon
    