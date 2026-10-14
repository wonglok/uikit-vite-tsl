
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PlaneTakeoffIcon as VanillaPlaneTakeoffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PlaneTakeoffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPlaneTakeoffIcon>
> = /*@__PURE__*/ build<VanillaPlaneTakeoffIcon, SvgProperties>(VanillaPlaneTakeoffIcon, "VanillaPlaneTakeoffIcon")
export const PlaneTakeoff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPlaneTakeoffIcon>
> = PlaneTakeoffIcon
    