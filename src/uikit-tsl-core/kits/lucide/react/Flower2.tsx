
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Flower2Icon as VanillaFlower2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Flower2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlower2Icon>
> = /*@__PURE__*/ build<VanillaFlower2Icon, SvgProperties>(VanillaFlower2Icon)
export const Flower2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlower2Icon>
> = Flower2Icon
    