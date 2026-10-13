
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChartBarIncreasingIcon as VanillaChartBarIncreasingIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChartBarIncreasingIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartBarIncreasingIcon>
> = /*@__PURE__*/ build<VanillaChartBarIncreasingIcon, SvgProperties>(VanillaChartBarIncreasingIcon)
export const ChartBarIncreasing: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartBarIncreasingIcon>
> = ChartBarIncreasingIcon
    