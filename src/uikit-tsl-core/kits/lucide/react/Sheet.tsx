
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SheetIcon as VanillaSheetIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SheetIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSheetIcon>
> = /*@__PURE__*/ build<VanillaSheetIcon, SvgProperties>(VanillaSheetIcon)
export const Sheet: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSheetIcon>
> = SheetIcon
    