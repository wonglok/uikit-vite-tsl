
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Building2Icon as VanillaBuilding2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Building2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBuilding2Icon>
> = /*@__PURE__*/ build<VanillaBuilding2Icon, SvgProperties>(VanillaBuilding2Icon, "VanillaBuilding2Icon")
export const Building2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBuilding2Icon>
> = Building2Icon
    