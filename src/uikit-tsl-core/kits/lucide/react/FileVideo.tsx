
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileVideoIcon as VanillaFileVideoIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileVideoIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileVideoIcon>
> = /*@__PURE__*/ build<VanillaFileVideoIcon, SvgProperties>(VanillaFileVideoIcon)
export const FileVideo: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileVideoIcon>
> = FileVideoIcon
    