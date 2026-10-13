
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileSpreadsheetIcon as VanillaFileSpreadsheetIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileSpreadsheetIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileSpreadsheetIcon>
> = /*@__PURE__*/ build<VanillaFileSpreadsheetIcon, SvgProperties>(VanillaFileSpreadsheetIcon)
export const FileSpreadsheet: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileSpreadsheetIcon>
> = FileSpreadsheetIcon
    