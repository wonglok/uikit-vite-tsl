
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Dice3Icon as VanillaDice3Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Dice3Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDice3Icon>
> = /*@__PURE__*/ build<VanillaDice3Icon, SvgProperties>(VanillaDice3Icon, "VanillaDice3Icon")
export const Dice3: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDice3Icon>
> = Dice3Icon
    