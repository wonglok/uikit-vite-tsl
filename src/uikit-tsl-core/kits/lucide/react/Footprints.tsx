
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FootprintsIcon as VanillaFootprintsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FootprintsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFootprintsIcon>
> = /*@__PURE__*/ build<VanillaFootprintsIcon, SvgProperties>(VanillaFootprintsIcon, "VanillaFootprintsIcon")
export const Footprints: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFootprintsIcon>
> = FootprintsIcon
    