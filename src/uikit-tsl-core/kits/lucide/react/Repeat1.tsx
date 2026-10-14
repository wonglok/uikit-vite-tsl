
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Repeat1Icon as VanillaRepeat1Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Repeat1Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRepeat1Icon>
> = /*@__PURE__*/ build<VanillaRepeat1Icon, SvgProperties>(VanillaRepeat1Icon, "VanillaRepeat1Icon")
export const Repeat1: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRepeat1Icon>
> = Repeat1Icon
    