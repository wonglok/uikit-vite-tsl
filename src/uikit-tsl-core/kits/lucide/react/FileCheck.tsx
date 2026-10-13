
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileCheckIcon as VanillaFileCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileCheckIcon>
> = /*@__PURE__*/ build<VanillaFileCheckIcon, SvgProperties>(VanillaFileCheckIcon)
export const FileCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileCheckIcon>
> = FileCheckIcon
    