
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Columns4Icon as VanillaColumns4Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Columns4Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaColumns4Icon>
> = /*@__PURE__*/ build<VanillaColumns4Icon, SvgProperties>(VanillaColumns4Icon, "VanillaColumns4Icon")
export const Columns4: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaColumns4Icon>
> = Columns4Icon
    