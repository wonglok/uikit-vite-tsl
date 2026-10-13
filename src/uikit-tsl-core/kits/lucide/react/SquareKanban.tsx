
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareKanbanIcon as VanillaSquareKanbanIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareKanbanIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareKanbanIcon>
> = /*@__PURE__*/ build<VanillaSquareKanbanIcon, SvgProperties>(VanillaSquareKanbanIcon)
export const SquareKanban: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareKanbanIcon>
> = SquareKanbanIcon
    