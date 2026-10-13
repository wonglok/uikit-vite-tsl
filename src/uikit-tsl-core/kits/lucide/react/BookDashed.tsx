
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookDashedIcon as VanillaBookDashedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookDashedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookDashedIcon>
> = /*@__PURE__*/ build<VanillaBookDashedIcon, SvgProperties>(VanillaBookDashedIcon)
export const BookDashed: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookDashedIcon>
> = BookDashedIcon
    