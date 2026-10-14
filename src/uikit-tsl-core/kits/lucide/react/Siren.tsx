
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SirenIcon as VanillaSirenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SirenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSirenIcon>
> = /*@__PURE__*/ build<VanillaSirenIcon, SvgProperties>(VanillaSirenIcon, "VanillaSirenIcon")
export const Siren: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSirenIcon>
> = SirenIcon
    