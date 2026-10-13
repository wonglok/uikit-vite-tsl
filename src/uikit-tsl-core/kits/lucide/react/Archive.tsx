
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArchiveIcon as VanillaArchiveIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArchiveIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArchiveIcon>
> = /*@__PURE__*/ build<VanillaArchiveIcon, SvgProperties>(VanillaArchiveIcon)
export const Archive: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArchiveIcon>
> = ArchiveIcon
    