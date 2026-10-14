
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BuildingIcon as VanillaBuildingIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BuildingIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBuildingIcon>
> = /*@__PURE__*/ build<VanillaBuildingIcon, SvgProperties>(VanillaBuildingIcon, "VanillaBuildingIcon")
export const Building: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBuildingIcon>
> = BuildingIcon
    