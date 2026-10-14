
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Columns2Icon as VanillaColumns2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Columns2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaColumns2Icon>
> = /*@__PURE__*/ build<VanillaColumns2Icon, SvgProperties>(VanillaColumns2Icon, "VanillaColumns2Icon")
export const Columns2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaColumns2Icon>
> = Columns2Icon
    