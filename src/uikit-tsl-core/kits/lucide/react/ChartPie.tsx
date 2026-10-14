
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChartPieIcon as VanillaChartPieIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChartPieIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartPieIcon>
> = /*@__PURE__*/ build<VanillaChartPieIcon, SvgProperties>(VanillaChartPieIcon, "VanillaChartPieIcon")
export const ChartPie: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartPieIcon>
> = ChartPieIcon
    