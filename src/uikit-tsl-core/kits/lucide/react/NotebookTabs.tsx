
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { NotebookTabsIcon as VanillaNotebookTabsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const NotebookTabsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNotebookTabsIcon>
> = /*@__PURE__*/ build<VanillaNotebookTabsIcon, SvgProperties>(VanillaNotebookTabsIcon, "VanillaNotebookTabsIcon")
export const NotebookTabs: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNotebookTabsIcon>
> = NotebookTabsIcon
    