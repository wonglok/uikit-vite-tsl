
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ContrastIcon as VanillaContrastIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ContrastIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaContrastIcon>
> = /*@__PURE__*/ build<VanillaContrastIcon, SvgProperties>(VanillaContrastIcon, "VanillaContrastIcon")
export const Contrast: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaContrastIcon>
> = ContrastIcon
    