
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChartNoAxesGanttIcon as VanillaChartNoAxesGanttIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChartNoAxesGanttIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartNoAxesGanttIcon>
> = /*@__PURE__*/ build<VanillaChartNoAxesGanttIcon, SvgProperties>(VanillaChartNoAxesGanttIcon)
export const ChartNoAxesGantt: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartNoAxesGanttIcon>
> = ChartNoAxesGanttIcon
    