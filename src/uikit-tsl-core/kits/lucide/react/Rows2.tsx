
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Rows2Icon as VanillaRows2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Rows2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRows2Icon>
> = /*@__PURE__*/ build<VanillaRows2Icon, SvgProperties>(VanillaRows2Icon, "VanillaRows2Icon")
export const Rows2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRows2Icon>
> = Rows2Icon
    