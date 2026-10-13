
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Dice1Icon as VanillaDice1Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Dice1Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDice1Icon>
> = /*@__PURE__*/ build<VanillaDice1Icon, SvgProperties>(VanillaDice1Icon)
export const Dice1: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDice1Icon>
> = Dice1Icon
    