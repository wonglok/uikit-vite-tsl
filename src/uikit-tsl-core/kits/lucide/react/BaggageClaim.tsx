
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BaggageClaimIcon as VanillaBaggageClaimIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BaggageClaimIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBaggageClaimIcon>
> = /*@__PURE__*/ build<VanillaBaggageClaimIcon, SvgProperties>(VanillaBaggageClaimIcon)
export const BaggageClaim: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBaggageClaimIcon>
> = BaggageClaimIcon
    