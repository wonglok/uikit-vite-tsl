
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PointerIcon as VanillaPointerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PointerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPointerIcon>
> = /*@__PURE__*/ build<VanillaPointerIcon, SvgProperties>(VanillaPointerIcon, "VanillaPointerIcon")
export const Pointer: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPointerIcon>
> = PointerIcon
    