
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Tally5Icon as VanillaTally5Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Tally5Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTally5Icon>
> = /*@__PURE__*/ build<VanillaTally5Icon, SvgProperties>(VanillaTally5Icon)
export const Tally5: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTally5Icon>
> = Tally5Icon
    