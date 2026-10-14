
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { EqualIcon as VanillaEqualIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const EqualIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEqualIcon>
> = /*@__PURE__*/ build<VanillaEqualIcon, SvgProperties>(VanillaEqualIcon, "VanillaEqualIcon")
export const Equal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEqualIcon>
> = EqualIcon
    