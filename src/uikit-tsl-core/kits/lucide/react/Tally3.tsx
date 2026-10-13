
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Tally3Icon as VanillaTally3Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Tally3Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTally3Icon>
> = /*@__PURE__*/ build<VanillaTally3Icon, SvgProperties>(VanillaTally3Icon)
export const Tally3: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTally3Icon>
> = Tally3Icon
    