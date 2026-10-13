
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChartGanttIcon as VanillaChartGanttIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChartGanttIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartGanttIcon>
> = /*@__PURE__*/ build<VanillaChartGanttIcon, SvgProperties>(VanillaChartGanttIcon)
export const ChartGantt: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartGanttIcon>
> = ChartGanttIcon
    