
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChartSplineIcon as VanillaChartSplineIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChartSplineIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartSplineIcon>
> = /*@__PURE__*/ build<VanillaChartSplineIcon, SvgProperties>(VanillaChartSplineIcon)
export const ChartSpline: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartSplineIcon>
> = ChartSplineIcon
    