
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChartAreaIcon as VanillaChartAreaIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChartAreaIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartAreaIcon>
> = /*@__PURE__*/ build<VanillaChartAreaIcon, SvgProperties>(VanillaChartAreaIcon, "VanillaChartAreaIcon")
export const ChartArea: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartAreaIcon>
> = ChartAreaIcon
    