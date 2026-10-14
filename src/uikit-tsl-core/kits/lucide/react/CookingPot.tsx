
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CookingPotIcon as VanillaCookingPotIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CookingPotIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCookingPotIcon>
> = /*@__PURE__*/ build<VanillaCookingPotIcon, SvgProperties>(VanillaCookingPotIcon, "VanillaCookingPotIcon")
export const CookingPot: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCookingPotIcon>
> = CookingPotIcon
    