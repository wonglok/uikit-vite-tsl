
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PointerOffIcon as VanillaPointerOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PointerOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPointerOffIcon>
> = /*@__PURE__*/ build<VanillaPointerOffIcon, SvgProperties>(VanillaPointerOffIcon, "VanillaPointerOffIcon")
export const PointerOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPointerOffIcon>
> = PointerOffIcon
    