
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WorkflowIcon as VanillaWorkflowIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WorkflowIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWorkflowIcon>
> = /*@__PURE__*/ build<VanillaWorkflowIcon, SvgProperties>(VanillaWorkflowIcon)
export const Workflow: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWorkflowIcon>
> = WorkflowIcon
    