
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareLibraryIcon as VanillaSquareLibraryIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareLibraryIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareLibraryIcon>
> = /*@__PURE__*/ build<VanillaSquareLibraryIcon, SvgProperties>(VanillaSquareLibraryIcon)
export const SquareLibrary: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareLibraryIcon>
> = SquareLibraryIcon
    