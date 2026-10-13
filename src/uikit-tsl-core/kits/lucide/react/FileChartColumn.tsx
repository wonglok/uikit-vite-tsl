
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileChartColumnIcon as VanillaFileChartColumnIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileChartColumnIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileChartColumnIcon>
> = /*@__PURE__*/ build<VanillaFileChartColumnIcon, SvgProperties>(VanillaFileChartColumnIcon)
export const FileChartColumn: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileChartColumnIcon>
> = FileChartColumnIcon
    