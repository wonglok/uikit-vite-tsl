
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TableOfContentsIcon as VanillaTableOfContentsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TableOfContentsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTableOfContentsIcon>
> = /*@__PURE__*/ build<VanillaTableOfContentsIcon, SvgProperties>(VanillaTableOfContentsIcon, "VanillaTableOfContentsIcon")
export const TableOfContents: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTableOfContentsIcon>
> = TableOfContentsIcon
    