
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WandIcon as VanillaWandIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WandIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWandIcon>
> = /*@__PURE__*/ build<VanillaWandIcon, SvgProperties>(VanillaWandIcon)
export const Wand: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWandIcon>
> = WandIcon
    