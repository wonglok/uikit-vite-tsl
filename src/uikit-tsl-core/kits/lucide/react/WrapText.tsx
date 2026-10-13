
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WrapTextIcon as VanillaWrapTextIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WrapTextIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWrapTextIcon>
> = /*@__PURE__*/ build<VanillaWrapTextIcon, SvgProperties>(VanillaWrapTextIcon)
export const WrapText: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWrapTextIcon>
> = WrapTextIcon
    