
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DrillIcon as VanillaDrillIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DrillIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDrillIcon>
> = /*@__PURE__*/ build<VanillaDrillIcon, SvgProperties>(VanillaDrillIcon, "VanillaDrillIcon")
export const Drill: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDrillIcon>
> = DrillIcon
    