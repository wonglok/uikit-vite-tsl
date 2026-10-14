
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ScanBarcodeIcon as VanillaScanBarcodeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ScanBarcodeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScanBarcodeIcon>
> = /*@__PURE__*/ build<VanillaScanBarcodeIcon, SvgProperties>(VanillaScanBarcodeIcon, "VanillaScanBarcodeIcon")
export const ScanBarcode: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScanBarcodeIcon>
> = ScanBarcodeIcon
    