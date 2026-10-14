
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileXIcon as VanillaFileXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileXIcon>
> = /*@__PURE__*/ build<VanillaFileXIcon, SvgProperties>(VanillaFileXIcon, "VanillaFileXIcon")
export const FileX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileXIcon>
> = FileXIcon
    