
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TabletsIcon as VanillaTabletsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TabletsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTabletsIcon>
> = /*@__PURE__*/ build<VanillaTabletsIcon, SvgProperties>(VanillaTabletsIcon)
export const Tablets: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTabletsIcon>
> = TabletsIcon
    