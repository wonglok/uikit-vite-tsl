
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookPlusIcon as VanillaBookPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookPlusIcon>
> = /*@__PURE__*/ build<VanillaBookPlusIcon, SvgProperties>(VanillaBookPlusIcon)
export const BookPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookPlusIcon>
> = BookPlusIcon
    