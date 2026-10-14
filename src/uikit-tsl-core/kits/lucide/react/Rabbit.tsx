
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RabbitIcon as VanillaRabbitIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RabbitIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRabbitIcon>
> = /*@__PURE__*/ build<VanillaRabbitIcon, SvgProperties>(VanillaRabbitIcon, "VanillaRabbitIcon")
export const Rabbit: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRabbitIcon>
> = RabbitIcon
    