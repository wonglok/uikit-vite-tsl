
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FilesIcon as VanillaFilesIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FilesIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFilesIcon>
> = /*@__PURE__*/ build<VanillaFilesIcon, SvgProperties>(VanillaFilesIcon)
export const Files: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFilesIcon>
> = FilesIcon
    