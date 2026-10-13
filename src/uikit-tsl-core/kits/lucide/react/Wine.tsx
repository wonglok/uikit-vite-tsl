
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WineIcon as VanillaWineIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WineIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWineIcon>
> = /*@__PURE__*/ build<VanillaWineIcon, SvgProperties>(VanillaWineIcon)
export const Wine: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWineIcon>
> = WineIcon
    