
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileMinusIcon as VanillaFileMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileMinusIcon>
> = /*@__PURE__*/ build<VanillaFileMinusIcon, SvgProperties>(VanillaFileMinusIcon, "VanillaFileMinusIcon")
export const FileMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileMinusIcon>
> = FileMinusIcon
    