
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChartBarBigIcon as VanillaChartBarBigIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChartBarBigIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartBarBigIcon>
> = /*@__PURE__*/ build<VanillaChartBarBigIcon, SvgProperties>(VanillaChartBarBigIcon)
export const ChartBarBig: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartBarBigIcon>
> = ChartBarBigIcon
    