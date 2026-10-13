
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MehIcon as VanillaMehIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MehIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMehIcon>
> = /*@__PURE__*/ build<VanillaMehIcon, SvgProperties>(VanillaMehIcon)
export const Meh: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMehIcon>
> = MehIcon
    