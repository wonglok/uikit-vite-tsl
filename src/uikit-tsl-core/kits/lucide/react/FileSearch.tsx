
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileSearchIcon as VanillaFileSearchIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileSearchIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileSearchIcon>
> = /*@__PURE__*/ build<VanillaFileSearchIcon, SvgProperties>(VanillaFileSearchIcon, "VanillaFileSearchIcon")
export const FileSearch: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileSearchIcon>
> = FileSearchIcon
    