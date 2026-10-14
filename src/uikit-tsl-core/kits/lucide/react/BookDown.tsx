
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookDownIcon as VanillaBookDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookDownIcon>
> = /*@__PURE__*/ build<VanillaBookDownIcon, SvgProperties>(VanillaBookDownIcon, "VanillaBookDownIcon")
export const BookDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookDownIcon>
> = BookDownIcon
    