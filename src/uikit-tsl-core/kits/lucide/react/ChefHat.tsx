
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChefHatIcon as VanillaChefHatIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChefHatIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChefHatIcon>
> = /*@__PURE__*/ build<VanillaChefHatIcon, SvgProperties>(VanillaChefHatIcon, "VanillaChefHatIcon")
export const ChefHat: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChefHatIcon>
> = ChefHatIcon
    