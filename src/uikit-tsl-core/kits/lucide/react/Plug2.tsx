
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Plug2Icon as VanillaPlug2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Plug2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPlug2Icon>
> = /*@__PURE__*/ build<VanillaPlug2Icon, SvgProperties>(VanillaPlug2Icon, "VanillaPlug2Icon")
export const Plug2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPlug2Icon>
> = Plug2Icon
    