
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FilePenIcon as VanillaFilePenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FilePenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFilePenIcon>
> = /*@__PURE__*/ build<VanillaFilePenIcon, SvgProperties>(VanillaFilePenIcon)
export const FilePen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFilePenIcon>
> = FilePenIcon
    