
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderClockIcon as VanillaFolderClockIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderClockIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderClockIcon>
> = /*@__PURE__*/ build<VanillaFolderClockIcon, SvgProperties>(VanillaFolderClockIcon)
export const FolderClock: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderClockIcon>
> = FolderClockIcon
    