
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Dice2Icon as VanillaDice2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Dice2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDice2Icon>
> = /*@__PURE__*/ build<VanillaDice2Icon, SvgProperties>(VanillaDice2Icon, "VanillaDice2Icon")
export const Dice2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDice2Icon>
> = Dice2Icon
    