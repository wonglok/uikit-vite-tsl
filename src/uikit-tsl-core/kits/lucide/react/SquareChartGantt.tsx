
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareChartGanttIcon as VanillaSquareChartGanttIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareChartGanttIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareChartGanttIcon>
> = /*@__PURE__*/ build<VanillaSquareChartGanttIcon, SvgProperties>(VanillaSquareChartGanttIcon)
export const SquareChartGantt: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareChartGanttIcon>
> = SquareChartGanttIcon
    