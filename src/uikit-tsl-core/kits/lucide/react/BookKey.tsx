
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookKeyIcon as VanillaBookKeyIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookKeyIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookKeyIcon>
> = /*@__PURE__*/ build<VanillaBookKeyIcon, SvgProperties>(VanillaBookKeyIcon, "VanillaBookKeyIcon")
export const BookKey: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookKeyIcon>
> = BookKeyIcon
    