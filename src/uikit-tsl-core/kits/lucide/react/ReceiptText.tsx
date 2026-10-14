
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ReceiptTextIcon as VanillaReceiptTextIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ReceiptTextIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaReceiptTextIcon>
> = /*@__PURE__*/ build<VanillaReceiptTextIcon, SvgProperties>(VanillaReceiptTextIcon, "VanillaReceiptTextIcon")
export const ReceiptText: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaReceiptTextIcon>
> = ReceiptTextIcon
    