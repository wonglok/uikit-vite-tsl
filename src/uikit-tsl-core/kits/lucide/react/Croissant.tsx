
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CroissantIcon as VanillaCroissantIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CroissantIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCroissantIcon>
> = /*@__PURE__*/ build<VanillaCroissantIcon, SvgProperties>(VanillaCroissantIcon)
export const Croissant: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCroissantIcon>
> = CroissantIcon
    