
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChartNetworkIcon as VanillaChartNetworkIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChartNetworkIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartNetworkIcon>
> = /*@__PURE__*/ build<VanillaChartNetworkIcon, SvgProperties>(VanillaChartNetworkIcon, "VanillaChartNetworkIcon")
export const ChartNetwork: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChartNetworkIcon>
> = ChartNetworkIcon
    