
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { NotebookIcon as VanillaNotebookIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const NotebookIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNotebookIcon>
> = /*@__PURE__*/ build<VanillaNotebookIcon, SvgProperties>(VanillaNotebookIcon)
export const Notebook: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNotebookIcon>
> = NotebookIcon
    