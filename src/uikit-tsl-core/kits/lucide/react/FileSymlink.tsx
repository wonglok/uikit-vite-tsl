
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileSymlinkIcon as VanillaFileSymlinkIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileSymlinkIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileSymlinkIcon>
> = /*@__PURE__*/ build<VanillaFileSymlinkIcon, SvgProperties>(VanillaFileSymlinkIcon)
export const FileSymlink: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileSymlinkIcon>
> = FileSymlinkIcon
    