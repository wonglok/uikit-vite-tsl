
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ReceiptIcon as VanillaReceiptIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ReceiptIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaReceiptIcon>
> = /*@__PURE__*/ build<VanillaReceiptIcon, SvgProperties>(VanillaReceiptIcon, "VanillaReceiptIcon")
export const Receipt: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaReceiptIcon>
> = ReceiptIcon
    