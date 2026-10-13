
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TableCellsMergeIcon as VanillaTableCellsMergeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TableCellsMergeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTableCellsMergeIcon>
> = /*@__PURE__*/ build<VanillaTableCellsMergeIcon, SvgProperties>(VanillaTableCellsMergeIcon)
export const TableCellsMerge: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTableCellsMergeIcon>
> = TableCellsMergeIcon
    