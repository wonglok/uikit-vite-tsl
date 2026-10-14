
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChartScatterIcon as VanillaChartScatterIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChartScatterIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartScatterIcon>
> = /*@__PURE__*/ build<VanillaChartScatterIcon, SvgProperties>(VanillaChartScatterIcon, "VanillaChartScatterIcon")
export const ChartScatter: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartScatterIcon>
> = ChartScatterIcon
    