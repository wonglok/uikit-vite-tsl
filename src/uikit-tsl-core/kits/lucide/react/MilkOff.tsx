
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MilkOffIcon as VanillaMilkOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MilkOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMilkOffIcon>
> = /*@__PURE__*/ build<VanillaMilkOffIcon, SvgProperties>(VanillaMilkOffIcon)
export const MilkOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMilkOffIcon>
> = MilkOffIcon
    