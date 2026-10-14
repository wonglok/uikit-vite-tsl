
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Dice4Icon as VanillaDice4Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Dice4Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDice4Icon>
> = /*@__PURE__*/ build<VanillaDice4Icon, SvgProperties>(VanillaDice4Icon, "VanillaDice4Icon")
export const Dice4: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDice4Icon>
> = Dice4Icon
    