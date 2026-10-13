
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PowerIcon as VanillaPowerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PowerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPowerIcon>
> = /*@__PURE__*/ build<VanillaPowerIcon, SvgProperties>(VanillaPowerIcon)
export const Power: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPowerIcon>
> = PowerIcon
    