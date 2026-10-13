
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TreesIcon as VanillaTreesIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TreesIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTreesIcon>
> = /*@__PURE__*/ build<VanillaTreesIcon, SvgProperties>(VanillaTreesIcon)
export const Trees: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTreesIcon>
> = TreesIcon
    