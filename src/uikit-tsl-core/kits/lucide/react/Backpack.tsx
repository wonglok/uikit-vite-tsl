
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BackpackIcon as VanillaBackpackIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BackpackIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBackpackIcon>
> = /*@__PURE__*/ build<VanillaBackpackIcon, SvgProperties>(VanillaBackpackIcon)
export const Backpack: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBackpackIcon>
> = BackpackIcon
    