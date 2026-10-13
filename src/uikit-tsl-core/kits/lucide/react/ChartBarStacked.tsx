
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChartBarStackedIcon as VanillaChartBarStackedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChartBarStackedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartBarStackedIcon>
> = /*@__PURE__*/ build<VanillaChartBarStackedIcon, SvgProperties>(VanillaChartBarStackedIcon)
export const ChartBarStacked: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartBarStackedIcon>
> = ChartBarStackedIcon
    