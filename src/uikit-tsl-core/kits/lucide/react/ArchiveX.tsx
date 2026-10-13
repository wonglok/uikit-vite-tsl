
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArchiveXIcon as VanillaArchiveXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArchiveXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArchiveXIcon>
> = /*@__PURE__*/ build<VanillaArchiveXIcon, SvgProperties>(VanillaArchiveXIcon)
export const ArchiveX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArchiveXIcon>
> = ArchiveXIcon
    