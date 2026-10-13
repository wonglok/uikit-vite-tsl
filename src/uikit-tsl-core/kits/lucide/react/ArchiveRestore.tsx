
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArchiveRestoreIcon as VanillaArchiveRestoreIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArchiveRestoreIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArchiveRestoreIcon>
> = /*@__PURE__*/ build<VanillaArchiveRestoreIcon, SvgProperties>(VanillaArchiveRestoreIcon)
export const ArchiveRestore: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArchiveRestoreIcon>
> = ArchiveRestoreIcon
    