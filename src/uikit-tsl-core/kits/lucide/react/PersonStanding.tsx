
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PersonStandingIcon as VanillaPersonStandingIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PersonStandingIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPersonStandingIcon>
> = /*@__PURE__*/ build<VanillaPersonStandingIcon, SvgProperties>(VanillaPersonStandingIcon, "VanillaPersonStandingIcon")
export const PersonStanding: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPersonStandingIcon>
> = PersonStandingIcon
    