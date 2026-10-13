
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChartColumnBigIcon as VanillaChartColumnBigIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChartColumnBigIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartColumnBigIcon>
> = /*@__PURE__*/ build<VanillaChartColumnBigIcon, SvgProperties>(VanillaChartColumnBigIcon)
export const ChartColumnBig: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartColumnBigIcon>
> = ChartColumnBigIcon
    