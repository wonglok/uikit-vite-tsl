
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileJsonIcon as VanillaFileJsonIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileJsonIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileJsonIcon>
> = /*@__PURE__*/ build<VanillaFileJsonIcon, SvgProperties>(VanillaFileJsonIcon)
export const FileJson: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileJsonIcon>
> = FileJsonIcon
    