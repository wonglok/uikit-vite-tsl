
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileArchiveIcon as VanillaFileArchiveIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileArchiveIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileArchiveIcon>
> = /*@__PURE__*/ build<VanillaFileArchiveIcon, SvgProperties>(VanillaFileArchiveIcon)
export const FileArchive: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileArchiveIcon>
> = FileArchiveIcon
    