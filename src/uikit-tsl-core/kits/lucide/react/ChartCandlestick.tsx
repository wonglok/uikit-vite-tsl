
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChartCandlestickIcon as VanillaChartCandlestickIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChartCandlestickIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartCandlestickIcon>
> = /*@__PURE__*/ build<VanillaChartCandlestickIcon, SvgProperties>(VanillaChartCandlestickIcon)
export const ChartCandlestick: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartCandlestickIcon>
> = ChartCandlestickIcon
    