
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SkipBackIcon as VanillaSkipBackIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SkipBackIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSkipBackIcon>
> = /*@__PURE__*/ build<VanillaSkipBackIcon, SvgProperties>(VanillaSkipBackIcon)
export const SkipBack: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSkipBackIcon>
> = SkipBackIcon
    