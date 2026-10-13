
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CatIcon as VanillaCatIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CatIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCatIcon>
> = /*@__PURE__*/ build<VanillaCatIcon, SvgProperties>(VanillaCatIcon)
export const Cat: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCatIcon>
> = CatIcon
    