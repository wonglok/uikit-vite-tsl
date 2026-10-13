
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UtilityPoleIcon as VanillaUtilityPoleIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UtilityPoleIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUtilityPoleIcon>
> = /*@__PURE__*/ build<VanillaUtilityPoleIcon, SvgProperties>(VanillaUtilityPoleIcon)
export const UtilityPole: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUtilityPoleIcon>
> = UtilityPoleIcon
    