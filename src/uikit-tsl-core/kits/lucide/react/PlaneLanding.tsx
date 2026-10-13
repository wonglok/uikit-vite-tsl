
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PlaneLandingIcon as VanillaPlaneLandingIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PlaneLandingIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPlaneLandingIcon>
> = /*@__PURE__*/ build<VanillaPlaneLandingIcon, SvgProperties>(VanillaPlaneLandingIcon)
export const PlaneLanding: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPlaneLandingIcon>
> = PlaneLandingIcon
    