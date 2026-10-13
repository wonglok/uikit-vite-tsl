
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FlowerIcon as VanillaFlowerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FlowerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlowerIcon>
> = /*@__PURE__*/ build<VanillaFlowerIcon, SvgProperties>(VanillaFlowerIcon)
export const Flower: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlowerIcon>
> = FlowerIcon
    