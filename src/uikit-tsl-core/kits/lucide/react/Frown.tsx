
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FrownIcon as VanillaFrownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FrownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFrownIcon>
> = /*@__PURE__*/ build<VanillaFrownIcon, SvgProperties>(VanillaFrownIcon)
export const Frown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFrownIcon>
> = FrownIcon
    