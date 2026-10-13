
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BlindsIcon as VanillaBlindsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BlindsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBlindsIcon>
> = /*@__PURE__*/ build<VanillaBlindsIcon, SvgProperties>(VanillaBlindsIcon)
export const Blinds: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBlindsIcon>
> = BlindsIcon
    