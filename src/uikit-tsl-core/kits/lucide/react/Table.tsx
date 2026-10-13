
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TableIcon as VanillaTableIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TableIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTableIcon>
> = /*@__PURE__*/ build<VanillaTableIcon, SvgProperties>(VanillaTableIcon)
export const Table: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTableIcon>
> = TableIcon
    