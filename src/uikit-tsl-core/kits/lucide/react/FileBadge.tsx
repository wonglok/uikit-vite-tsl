
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileBadgeIcon as VanillaFileBadgeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileBadgeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileBadgeIcon>
> = /*@__PURE__*/ build<VanillaFileBadgeIcon, SvgProperties>(VanillaFileBadgeIcon, "VanillaFileBadgeIcon")
export const FileBadge: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileBadgeIcon>
> = FileBadgeIcon
    