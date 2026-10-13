
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TreeDeciduousIcon as VanillaTreeDeciduousIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TreeDeciduousIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTreeDeciduousIcon>
> = /*@__PURE__*/ build<VanillaTreeDeciduousIcon, SvgProperties>(VanillaTreeDeciduousIcon)
export const TreeDeciduous: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTreeDeciduousIcon>
> = TreeDeciduousIcon
    