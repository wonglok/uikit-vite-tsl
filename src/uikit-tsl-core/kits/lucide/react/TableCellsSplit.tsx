
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TableCellsSplitIcon as VanillaTableCellsSplitIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TableCellsSplitIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTableCellsSplitIcon>
> = /*@__PURE__*/ build<VanillaTableCellsSplitIcon, SvgProperties>(VanillaTableCellsSplitIcon)
export const TableCellsSplit: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTableCellsSplitIcon>
> = TableCellsSplitIcon
    