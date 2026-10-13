
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileDownIcon as VanillaFileDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileDownIcon>
> = /*@__PURE__*/ build<VanillaFileDownIcon, SvgProperties>(VanillaFileDownIcon)
export const FileDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileDownIcon>
> = FileDownIcon
    