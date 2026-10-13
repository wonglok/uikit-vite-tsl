
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WindIcon as VanillaWindIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WindIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWindIcon>
> = /*@__PURE__*/ build<VanillaWindIcon, SvgProperties>(VanillaWindIcon)
export const Wind: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWindIcon>
> = WindIcon
    