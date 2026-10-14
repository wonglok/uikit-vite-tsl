
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ImportIcon as VanillaImportIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ImportIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaImportIcon>
> = /*@__PURE__*/ build<VanillaImportIcon, SvgProperties>(VanillaImportIcon, "VanillaImportIcon")
export const Import: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaImportIcon>
> = ImportIcon
    