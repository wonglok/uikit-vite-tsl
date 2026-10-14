
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Music2Icon as VanillaMusic2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Music2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMusic2Icon>
> = /*@__PURE__*/ build<VanillaMusic2Icon, SvgProperties>(VanillaMusic2Icon, "VanillaMusic2Icon")
export const Music2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMusic2Icon>
> = Music2Icon
    