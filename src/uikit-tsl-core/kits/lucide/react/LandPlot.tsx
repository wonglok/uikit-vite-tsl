
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LandPlotIcon as VanillaLandPlotIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LandPlotIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLandPlotIcon>
> = /*@__PURE__*/ build<VanillaLandPlotIcon, SvgProperties>(VanillaLandPlotIcon, "VanillaLandPlotIcon")
export const LandPlot: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLandPlotIcon>
> = LandPlotIcon
    