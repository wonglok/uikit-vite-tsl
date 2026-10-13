
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { NotebookPenIcon as VanillaNotebookPenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const NotebookPenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNotebookPenIcon>
> = /*@__PURE__*/ build<VanillaNotebookPenIcon, SvgProperties>(VanillaNotebookPenIcon)
export const NotebookPen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNotebookPenIcon>
> = NotebookPenIcon
    