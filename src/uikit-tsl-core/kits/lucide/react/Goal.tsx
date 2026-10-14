
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GoalIcon as VanillaGoalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GoalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGoalIcon>
> = /*@__PURE__*/ build<VanillaGoalIcon, SvgProperties>(VanillaGoalIcon, "VanillaGoalIcon")
export const Goal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGoalIcon>
> = GoalIcon
    