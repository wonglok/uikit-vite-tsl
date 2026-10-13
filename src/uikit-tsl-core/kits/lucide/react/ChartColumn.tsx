
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChartColumnIcon as VanillaChartColumnIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChartColumnIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartColumnIcon>
> = /*@__PURE__*/ build<VanillaChartColumnIcon, SvgProperties>(VanillaChartColumnIcon)
export const ChartColumn: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartColumnIcon>
> = ChartColumnIcon
    