
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookTextIcon as VanillaBookTextIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookTextIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookTextIcon>
> = /*@__PURE__*/ build<VanillaBookTextIcon, SvgProperties>(VanillaBookTextIcon, "VanillaBookTextIcon")
export const BookText: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookTextIcon>
> = BookTextIcon
    