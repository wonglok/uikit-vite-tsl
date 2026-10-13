
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AlignJustifyIcon as VanillaAlignJustifyIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AlignJustifyIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlignJustifyIcon>
> = /*@__PURE__*/ build<VanillaAlignJustifyIcon, SvgProperties>(VanillaAlignJustifyIcon)
export const AlignJustify: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlignJustifyIcon>
> = AlignJustifyIcon
    