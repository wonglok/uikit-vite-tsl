
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChartBarIcon as VanillaChartBarIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChartBarIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartBarIcon>
> = /*@__PURE__*/ build<VanillaChartBarIcon, SvgProperties>(VanillaChartBarIcon, "VanillaChartBarIcon")
export const ChartBar: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartBarIcon>
> = ChartBarIcon
    