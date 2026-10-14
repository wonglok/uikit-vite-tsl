
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MilestoneIcon as VanillaMilestoneIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MilestoneIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMilestoneIcon>
> = /*@__PURE__*/ build<VanillaMilestoneIcon, SvgProperties>(VanillaMilestoneIcon, "VanillaMilestoneIcon")
export const Milestone: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMilestoneIcon>
> = MilestoneIcon
    