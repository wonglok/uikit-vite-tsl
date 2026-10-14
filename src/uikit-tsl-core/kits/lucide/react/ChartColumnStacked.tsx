
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChartColumnStackedIcon as VanillaChartColumnStackedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChartColumnStackedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartColumnStackedIcon>
> = /*@__PURE__*/ build<VanillaChartColumnStackedIcon, SvgProperties>(VanillaChartColumnStackedIcon, "VanillaChartColumnStackedIcon")
export const ChartColumnStacked: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartColumnStackedIcon>
> = ChartColumnStackedIcon
    