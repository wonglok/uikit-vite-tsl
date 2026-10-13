
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileKeyIcon as VanillaFileKeyIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileKeyIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileKeyIcon>
> = /*@__PURE__*/ build<VanillaFileKeyIcon, SvgProperties>(VanillaFileKeyIcon)
export const FileKey: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileKeyIcon>
> = FileKeyIcon
    