
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Minimize2Icon as VanillaMinimize2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Minimize2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMinimize2Icon>
> = /*@__PURE__*/ build<VanillaMinimize2Icon, SvgProperties>(VanillaMinimize2Icon, "VanillaMinimize2Icon")
export const Minimize2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMinimize2Icon>
> = Minimize2Icon
    