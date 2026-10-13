
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Dice6Icon as VanillaDice6Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Dice6Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDice6Icon>
> = /*@__PURE__*/ build<VanillaDice6Icon, SvgProperties>(VanillaDice6Icon)
export const Dice6: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDice6Icon>
> = Dice6Icon
    