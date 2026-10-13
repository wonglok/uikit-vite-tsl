
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChartNoAxesColumnIcon as VanillaChartNoAxesColumnIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChartNoAxesColumnIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartNoAxesColumnIcon>
> = /*@__PURE__*/ build<VanillaChartNoAxesColumnIcon, SvgProperties>(VanillaChartNoAxesColumnIcon)
export const ChartNoAxesColumn: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartNoAxesColumnIcon>
> = ChartNoAxesColumnIcon
    