
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileChartLineIcon as VanillaFileChartLineIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileChartLineIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileChartLineIcon>
> = /*@__PURE__*/ build<VanillaFileChartLineIcon, SvgProperties>(VanillaFileChartLineIcon)
export const FileChartLine: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileChartLineIcon>
> = FileChartLineIcon
    