
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileTypeIcon as VanillaFileTypeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileTypeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileTypeIcon>
> = /*@__PURE__*/ build<VanillaFileTypeIcon, SvgProperties>(VanillaFileTypeIcon)
export const FileType: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileTypeIcon>
> = FileTypeIcon
    