
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Dice5Icon as VanillaDice5Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Dice5Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDice5Icon>
> = /*@__PURE__*/ build<VanillaDice5Icon, SvgProperties>(VanillaDice5Icon)
export const Dice5: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDice5Icon>
> = Dice5Icon
    