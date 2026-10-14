
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UtensilsIcon as VanillaUtensilsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UtensilsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUtensilsIcon>
> = /*@__PURE__*/ build<VanillaUtensilsIcon, SvgProperties>(VanillaUtensilsIcon, "VanillaUtensilsIcon")
export const Utensils: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUtensilsIcon>
> = UtensilsIcon
    