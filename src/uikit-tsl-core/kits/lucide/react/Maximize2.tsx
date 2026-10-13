
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Maximize2Icon as VanillaMaximize2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Maximize2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMaximize2Icon>
> = /*@__PURE__*/ build<VanillaMaximize2Icon, SvgProperties>(VanillaMaximize2Icon)
export const Maximize2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMaximize2Icon>
> = Maximize2Icon
    