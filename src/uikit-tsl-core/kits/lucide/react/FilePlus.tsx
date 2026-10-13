
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FilePlusIcon as VanillaFilePlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FilePlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFilePlusIcon>
> = /*@__PURE__*/ build<VanillaFilePlusIcon, SvgProperties>(VanillaFilePlusIcon)
export const FilePlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFilePlusIcon>
> = FilePlusIcon
    