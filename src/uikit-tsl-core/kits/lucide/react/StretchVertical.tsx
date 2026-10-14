
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { StretchVerticalIcon as VanillaStretchVerticalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const StretchVerticalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStretchVerticalIcon>
> = /*@__PURE__*/ build<VanillaStretchVerticalIcon, SvgProperties>(VanillaStretchVerticalIcon, "VanillaStretchVerticalIcon")
export const StretchVertical: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStretchVerticalIcon>
> = StretchVerticalIcon
    