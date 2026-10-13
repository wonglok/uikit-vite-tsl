
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Tally1Icon as VanillaTally1Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Tally1Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTally1Icon>
> = /*@__PURE__*/ build<VanillaTally1Icon, SvgProperties>(VanillaTally1Icon)
export const Tally1: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTally1Icon>
> = Tally1Icon
    