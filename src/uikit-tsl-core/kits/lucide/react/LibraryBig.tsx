
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LibraryBigIcon as VanillaLibraryBigIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LibraryBigIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLibraryBigIcon>
> = /*@__PURE__*/ build<VanillaLibraryBigIcon, SvgProperties>(VanillaLibraryBigIcon)
export const LibraryBig: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLibraryBigIcon>
> = LibraryBigIcon
    