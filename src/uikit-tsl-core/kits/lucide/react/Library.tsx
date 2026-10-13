
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LibraryIcon as VanillaLibraryIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LibraryIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLibraryIcon>
> = /*@__PURE__*/ build<VanillaLibraryIcon, SvgProperties>(VanillaLibraryIcon)
export const Library: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLibraryIcon>
> = LibraryIcon
    