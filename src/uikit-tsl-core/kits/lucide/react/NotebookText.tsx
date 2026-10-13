
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { NotebookTextIcon as VanillaNotebookTextIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const NotebookTextIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNotebookTextIcon>
> = /*@__PURE__*/ build<VanillaNotebookTextIcon, SvgProperties>(VanillaNotebookTextIcon)
export const NotebookText: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNotebookTextIcon>
> = NotebookTextIcon
    