
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { KanbanIcon as VanillaKanbanIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const KanbanIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaKanbanIcon>
> = /*@__PURE__*/ build<VanillaKanbanIcon, SvgProperties>(VanillaKanbanIcon, "VanillaKanbanIcon")
export const Kanban: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaKanbanIcon>
> = KanbanIcon
    