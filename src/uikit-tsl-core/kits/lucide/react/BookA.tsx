
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookAIcon as VanillaBookAIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookAIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookAIcon>
> = /*@__PURE__*/ build<VanillaBookAIcon, SvgProperties>(VanillaBookAIcon)
export const BookA: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookAIcon>
> = BookAIcon
    