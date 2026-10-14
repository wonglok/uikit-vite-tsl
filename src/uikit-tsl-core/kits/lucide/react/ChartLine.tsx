
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChartLineIcon as VanillaChartLineIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChartLineIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartLineIcon>
> = /*@__PURE__*/ build<VanillaChartLineIcon, SvgProperties>(VanillaChartLineIcon, "VanillaChartLineIcon")
export const ChartLine: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartLineIcon>
> = ChartLineIcon
    