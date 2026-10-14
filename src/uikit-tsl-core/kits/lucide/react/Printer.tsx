
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PrinterIcon as VanillaPrinterIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PrinterIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPrinterIcon>
> = /*@__PURE__*/ build<VanillaPrinterIcon, SvgProperties>(VanillaPrinterIcon, "VanillaPrinterIcon")
export const Printer: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPrinterIcon>
> = PrinterIcon
    