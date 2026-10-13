
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BarcodeIcon as VanillaBarcodeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BarcodeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBarcodeIcon>
> = /*@__PURE__*/ build<VanillaBarcodeIcon, SvgProperties>(VanillaBarcodeIcon)
export const Barcode: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBarcodeIcon>
> = BarcodeIcon
    