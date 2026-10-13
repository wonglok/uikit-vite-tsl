
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { EarIcon as VanillaEarIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const EarIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEarIcon>
> = /*@__PURE__*/ build<VanillaEarIcon, SvgProperties>(VanillaEarIcon)
export const Ear: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEarIcon>
> = EarIcon
    