
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileIcon as VanillaFileIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileIcon>
> = /*@__PURE__*/ build<VanillaFileIcon, SvgProperties>(VanillaFileIcon)
export const File: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileIcon>
> = FileIcon
    