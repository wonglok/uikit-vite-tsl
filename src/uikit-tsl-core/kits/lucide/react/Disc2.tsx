
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Disc2Icon as VanillaDisc2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Disc2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDisc2Icon>
> = /*@__PURE__*/ build<VanillaDisc2Icon, SvgProperties>(VanillaDisc2Icon)
export const Disc2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDisc2Icon>
> = Disc2Icon
    