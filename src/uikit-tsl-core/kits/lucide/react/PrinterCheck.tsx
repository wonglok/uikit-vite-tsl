
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PrinterCheckIcon as VanillaPrinterCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PrinterCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPrinterCheckIcon>
> = /*@__PURE__*/ build<VanillaPrinterCheckIcon, SvgProperties>(VanillaPrinterCheckIcon, "VanillaPrinterCheckIcon")
export const PrinterCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPrinterCheckIcon>
> = PrinterCheckIcon
    