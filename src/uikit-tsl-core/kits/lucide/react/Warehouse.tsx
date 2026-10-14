
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WarehouseIcon as VanillaWarehouseIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WarehouseIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWarehouseIcon>
> = /*@__PURE__*/ build<VanillaWarehouseIcon, SvgProperties>(VanillaWarehouseIcon, "VanillaWarehouseIcon")
export const Warehouse: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWarehouseIcon>
> = WarehouseIcon
    