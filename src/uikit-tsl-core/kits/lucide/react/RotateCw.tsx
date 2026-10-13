
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RotateCwIcon as VanillaRotateCwIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RotateCwIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRotateCwIcon>
> = /*@__PURE__*/ build<VanillaRotateCwIcon, SvgProperties>(VanillaRotateCwIcon)
export const RotateCw: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRotateCwIcon>
> = RotateCwIcon
    