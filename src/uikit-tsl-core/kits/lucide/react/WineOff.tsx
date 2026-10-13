
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WineOffIcon as VanillaWineOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WineOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWineOffIcon>
> = /*@__PURE__*/ build<VanillaWineOffIcon, SvgProperties>(VanillaWineOffIcon)
export const WineOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWineOffIcon>
> = WineOffIcon
    