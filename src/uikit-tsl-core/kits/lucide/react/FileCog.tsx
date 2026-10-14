
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileCogIcon as VanillaFileCogIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileCogIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileCogIcon>
> = /*@__PURE__*/ build<VanillaFileCogIcon, SvgProperties>(VanillaFileCogIcon, "VanillaFileCogIcon")
export const FileCog: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileCogIcon>
> = FileCogIcon
    