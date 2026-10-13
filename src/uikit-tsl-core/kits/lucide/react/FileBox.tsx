
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileBoxIcon as VanillaFileBoxIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileBoxIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileBoxIcon>
> = /*@__PURE__*/ build<VanillaFileBoxIcon, SvgProperties>(VanillaFileBoxIcon)
export const FileBox: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileBoxIcon>
> = FileBoxIcon
    