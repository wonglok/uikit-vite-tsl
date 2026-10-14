
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Tally4Icon as VanillaTally4Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Tally4Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTally4Icon>
> = /*@__PURE__*/ build<VanillaTally4Icon, SvgProperties>(VanillaTally4Icon, "VanillaTally4Icon")
export const Tally4: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTally4Icon>
> = Tally4Icon
    