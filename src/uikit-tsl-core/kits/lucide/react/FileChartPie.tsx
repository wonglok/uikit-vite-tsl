
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileChartPieIcon as VanillaFileChartPieIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileChartPieIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileChartPieIcon>
> = /*@__PURE__*/ build<VanillaFileChartPieIcon, SvgProperties>(VanillaFileChartPieIcon)
export const FileChartPie: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileChartPieIcon>
> = FileChartPieIcon
    