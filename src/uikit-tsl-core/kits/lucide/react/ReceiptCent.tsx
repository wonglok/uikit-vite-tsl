
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ReceiptCentIcon as VanillaReceiptCentIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ReceiptCentIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaReceiptCentIcon>
> = /*@__PURE__*/ build<VanillaReceiptCentIcon, SvgProperties>(VanillaReceiptCentIcon, "VanillaReceiptCentIcon")
export const ReceiptCent: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaReceiptCentIcon>
> = ReceiptCentIcon
    