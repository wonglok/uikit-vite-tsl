
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileCodeIcon as VanillaFileCodeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileCodeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileCodeIcon>
> = /*@__PURE__*/ build<VanillaFileCodeIcon, SvgProperties>(VanillaFileCodeIcon)
export const FileCode: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileCodeIcon>
> = FileCodeIcon
    