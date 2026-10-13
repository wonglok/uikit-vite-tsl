
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ReceiptEuroIcon as VanillaReceiptEuroIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ReceiptEuroIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaReceiptEuroIcon>
> = /*@__PURE__*/ build<VanillaReceiptEuroIcon, SvgProperties>(VanillaReceiptEuroIcon)
export const ReceiptEuro: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaReceiptEuroIcon>
> = ReceiptEuroIcon
    